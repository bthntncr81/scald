import usePOS, { POSState } from '@/data/use_pos';
import useDebounce from '@/hooks/useDebounce';
import useWindowSize from '@/hooks/useWindowSize';
import {
  Badge,
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { ArrowRight, Trash } from 'iconsax-react';
import { useState } from 'react';
import axios from 'axios'; // Bu satırı ekleyin

import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { match, P } from 'ts-pattern';
import DiscountTypeRadioGroup from './DiscountTypeSelect';
import OrderTypeRadioGroup from './OrderTypeSelect';
import PaymentTypeRadioGroup from './PaymentTypeSelect';
import EditPOSItem from './EditPOSItem';
import QuantityController from '@/components/common/QuantityController';
import { convertToCurrencyFormat } from '@/utils/currency_formatter';
import { Charge, POSItem, POSItemAddon, POSItemVariant } from '@/types/pos_type';
import { PageProps } from '@/types';
import { usePage } from '@inertiajs/react';

interface TablePOSCheckoutFormProps {
  tables: any[];
  isTablesLoading: boolean;
  selectedTableId: string | null;
  onTableSelect: (tableId: string | null) => void;
}

export const TablePOSCheckoutForm = ({
  tables,
  isTablesLoading,
  selectedTableId,
  onTableSelect,
}: TablePOSCheckoutFormProps) => {
  const pos = usePOS();
  const { t } = useTranslation();
  const {
    props: { branding },
  } = usePage() as { props: PageProps };
  const [discount, setDiscount] = useState<{
    show: boolean;
    value: number;
    type: 'amount' | 'percentage';
  }>({ show: false, value: 0, type: 'amount' });
  const [errors, setErrors] = useState<Map<string, string>>(new Map());
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);

  const windowSize = useWindowSize();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // reset errors
  const resetError = (key: string) => {
    errors.delete(key);
    setErrors(errors);
  };

  // add discount
  const addDiscount = (payload: typeof discount) => {
    pos.setDiscount(payload.value, payload.type);
    setDiscount({
      ...payload,
      show: false,
    });
  };

  // join variants name
  const joinedVariantNames = (variants: POSItemVariant[]) => {
    const variantSize = variants.length;
    return variants
      .map(
        (variant, index) =>
          variant.option.map((opt) => opt.name).join(', ') +
          (index + 1 === variantSize ? '' : ' | ')
      )
      .join('');
  };

  // join addons name
  const joinedAddonNames = (addons: POSItemAddon[]) =>
    addons.map((addon) => addon.name + ' x ' + addon.quantity).join(', ');

  const resetPOSState = () => {
    pos.resetPOS();
    onTableSelect(null);
  };

  // handle on place order logic
  const onPlaceOrder = async (state: POSState) => {
    const errors = new Map<string, string>();
    setIsOrderProcessing(true);

    // Validate order type
    if (!state.type) {
      errors.set('orderType', 'Order type is required.');
    }

    // Validate table selection for dine-in orders
    if (state.type === 'dine_in' && !selectedTableId) {
      errors.set('table', 'Table selection is required for dine-in orders.');
    }

    // Validate payment type
    if (!state.paymentType) {
      errors.set('paymentType', 'Payment type is required.');
    }

    // Validate if at least one item is selected
    if (!state.POSItems.length) {
      toast.error('Select at least one item.');
      return;
    }

    // Return errors if any validation failed
    if (errors.size > 0) {
      setErrors(errors);
      setIsOrderProcessing(false);
      return;
    }

    // Format the data for submission
    const formattedData = {
      tableId: selectedTableId,
      type: state.type,
      manualDiscount: state.discount,
      paymentType: state.paymentType,
      customerNote: state.note,
      paymentStatus: true,
      orderItems: state.POSItems.map((item) => ({
        menuItemId: item.id,
        quantity: item.quantity,
        variants: item.variants.map((variant) => ({
          id: variant.id,
          optionIds: variant.option.map((opt) => opt.id),
        })),
        addons: item.addons.map((addon) => ({
          id: addon.id,
          quantity: addon.quantity,
        })),
      })),
    };

    try {
      const { data } = await axios.post('/api/orders', formattedData);

      if (data?.success) {
        toast.success(t(data?.message) || t('Order created successfully'));
        resetPOSState();
      }
    } catch (e) {
      toast.error(t(e.response.data.message) || t('Something went wrong'));
    } finally {
      setIsOrderProcessing(false);
    }
  };

  const content = (
    <>
      <div
        style={{ minWidth: '400px', width: '400px' }}
        className="@[900px]:sticky top-0 right-0 w-full @[900px]:w-auto inset-y-0 flex flex-col @[900px]:min-w-[512px] h-[calc(100vh-65px)]  md:h-[calc(100vh-76px)] bg-white border-l border-black/10 overflow-hidden"
      >
        <Flex
          flexDir="column"
          rowGap="2"
          flexGrow={1}
          px={4}
          py={6}
          overflowY="auto"
          overflowX="hidden"
        >
          <Flex flexDir="column" gap="2">
            <label>{t('Select order type')}</label>
            <OrderTypeRadioGroup
              defaultValue={pos.type}
              onChange={(value) => {
                resetError('orderType');
                pos.changeType(
                  value as 'delivery' | 'dine_in' | 'pickup',
                  branding.business.deliveryCharge
                );
              }}
            />
            {errors.get('orderType') ? (
              <Text className="text-sm text-red-500">{t(errors.get('orderType') as 'string')}</Text>
            ) : null}
          </Flex>

          {/* Table selection (only shown for dine-in orders) */}
          {pos.type === 'dine_in' && (
            <Flex flexDir="column" gap="2">
              <label>{t('Select Table')}</label>
              <Select
                placeholder={t('Select a table')}
                value={selectedTableId || ''}
                onChange={(e) => {
                  resetError('table');
                  onTableSelect(e.target.value || null);
                }}
              >
                {match({ tables, isTablesLoading })
                  .with({ isTablesLoading: true }, () => (
                    <option disabled>{t('Loading tables...')}</option>
                  ))
                  .with({ tables: P.not(P.nullish) }, ({ tables }) =>
                    tables.map((table: any) => (
                      <option key={table.id} value={table.id}>
                        {table.name} ({table.status})
                      </option>
                    ))
                  )
                  .otherwise(() => (
                    <option disabled>{t('No tables available')}</option>
                  ))}
              </Select>
              {errors.get('table') ? (
                <Text className="text-sm text-red-500">{t(errors.get('table') as 'string')}</Text>
              ) : null}
            </Flex>
          )}

          {/* Order note */}
          <div>
            <Textarea
              rows={3}
              placeholder={t('Order note')}
              value={pos.note}
              onChange={(e) => pos.setNote(e.target.value)}
              className="focus:border-primary-500 focus:outline-none focus:shadow-none mb-2"
            />
          </div>

          {/* Order items */}
          <div className="relative w-full">
            <Box
              border="1px"
              borderColor="secondary.200"
              className="rounded-md flex-1 w-full overflow-w-auto shadow-[0_1px_2px_rgba(0,0,0,6%),0_1px_3px_rgba(0,0,0,10%)]"
            >
              <div className="w-full overflow-x-auto">
                <Table
                  variant={pos.POSItems.length ? 'striped' : 'simple'}
                  className="table-auto w-full"
                >
                  <Thead>
                    <Tr>
                      <Th className="w-full px-6">{t('ITEMS')}</Th>
                      <Th className="text-center w-[100px] p-0">{t('QTY')}</Th>
                      <Th className="w-[100px] pl-2 pr-6">{t('TOTAL')}</Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {pos.POSItems.length ? (
                      pos.POSItems.map((item: POSItem, index: number) => (
                        <Tr key={index} fontSize={14} lineHeight={5} fontWeight={400}>
                          <Td className="w-full pl-6 pr-1.5">
                            <HStack className="flex-1">
                              <Box className="flex-1">
                                <Text noOfLines={1} fontWeight={500}>
                                  {item.name}
                                </Text>
                                <Text fontSize={12}>
                                  {joinedVariantNames(item.variants)}
                                  {item.addons.length > 0 && ' | '}
                                  {joinedAddonNames(item.addons)}
                                </Text>
                              </Box>

                              <HStack columnGap={0}>
                                <IconButton
                                  size="sm"
                                  aria-label="delete"
                                  onClick={() => pos.removeItemFromPOS(item)}
                                  variant="ghost"
                                  className="text-secondary-500 hover:text-red-500 hover:bg-secondary-100"
                                >
                                  <Trash size="16" />
                                </IconButton>
                                <EditPOSItem {...item} />
                              </HStack>
                            </HStack>
                          </Td>
                          <Td className="p-0">
                            <QuantityController
                              value={item.quantity}
                              onValueChange={(quantity) => {
                                pos.setQuantity(item, quantity);
                              }}
                            />
                          </Td>
                          <Td isNumeric className="pl-2 pr-6">
                            {convertToCurrencyFormat(item?.total ?? 0)}
                          </Td>
                        </Tr>
                      ))
                    ) : (
                      <Tr>
                        <Td colSpan={4} className="border-none">
                          <Text className="text-secondary-500 font-medium text-sm">
                            {t('No items have been added yet.')}
                          </Text>
                        </Td>
                      </Tr>
                    )}
                  </Tbody>
                </Table>
              </div>
            </Box>
          </div>

          {/* Calculations */}
          <Flex flexDir="column" className="text-lg font-normal">
            {/* Subtotal */}
            <Box as="div" className="grid grid-cols-[1fr,100px] border-b py-1.5 border-black/5">
              <Text> {t('Subtotal')}: </Text>
              <Text fontWeight={500} textAlign="right">
                {convertToCurrencyFormat(pos.subTotal)}
              </Text>
            </Box>

            {/* Charges */}
            {pos.POSCharges.map((charge: Charge) => (
              <Box
                as="div"
                key={charge?.id}
                className="grid grid-cols-[1fr,100px] border-b py-1.5 border-black/5"
              >
                <Text>{charge.name}:</Text>
                <Text fontWeight={500} textAlign="right">
                  {convertToCurrencyFormat(charge.amount)}
                </Text>
              </Box>
            ))}

            {/* Discount */}
            <Box as="div" className="grid grid-cols-[1fr,100px] border-b py-1.5 border-black/5">
              <Box className="flex flex-wrap @xs:flex-nowrap items-center gap-3">
                {t('Discount')}:
                {pos.discount === 0 && !discount.show && (
                  <Button
                    size="sm"
                    className="px-3"
                    onClick={() => setDiscount({ ...discount, show: true })}
                  >
                    {t('Add Discount')}
                  </Button>
                )}
                {discount.show && (
                  <Button
                    size="sm"
                    className="px-3"
                    onClick={() => {
                      setDiscount({ ...discount, value: 0, show: false });
                      pos.setDiscount(0, 'amount');
                    }}
                  >
                    {t('Remove Discount')}
                  </Button>
                )}
                {pos.discount !== 0 && !discount.show && (
                  <Button
                    size="sm"
                    className="px-3"
                    onClick={() =>
                      setDiscount({
                        ...discount,
                        show: true,
                      })
                    }
                  >
                    {t('Edit Discount')}
                  </Button>
                )}
              </Box>
              <Text fontWeight={500} textAlign="right">
                - {convertToCurrencyFormat(pos.discount)}
              </Text>
            </Box>
            {discount.show && (
              <Box as="div" className="grid grid-cols-[1fr,100px] gap-4 pt-2">
                <HStack className="flex gap-3">
                  <HStack>
                    <DiscountTypeRadioGroup
                      defaultValue={discount.type}
                      onChange={(value) =>
                        setDiscount((prev) => ({ ...prev, type: value as 'amount' | 'percentage' }))
                      }
                    />
                  </HStack>
                  <Input
                    type="number"
                    value={discount.value}
                    onChange={(e) => setDiscount((prev) => ({ ...prev, value: +e.target.value }))}
                    placeholder={t('Add discount')}
                    onFocus={(e) => e.currentTarget.select()}
                  />
                </HStack>
                <Button
                  variant="outline"
                  colorScheme="blue"
                  type="button"
                  onClick={() => addDiscount(discount)}
                >
                  {t('Add')}
                </Button>
              </Box>
            )}
          </Flex>
        </Flex>
        <Box className="px-4 py-6 flex flex-col gap-3.5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.06),0px_-1px_3px_0px_rgba(0,0,0,0.1)]">
          <Box
            as="div"
            className="grid grid-cols-[1fr,100px] text-lg font-normal border-b py-1 border-black/[6%]"
          >
            <Box> {t('Grand total')}: </Box>
            <Text fontWeight={700} textAlign="right">
              {convertToCurrencyFormat(pos.total)}
            </Text>
          </Box>

          <Flex flexDir="column" gap="2">
            <label>{t('Payment type')}</label>
            <PaymentTypeRadioGroup
              defaultValue={pos.paymentType}
              onChange={(value) => {
                pos.changePaymentType(value as 'cash' | 'card');
                resetError('paymentType');
              }}
            />

            {errors.get('paymentType') ? (
              <Text className="text-sm text-red-500">
                {t(errors.get('paymentType') as 'string')}
              </Text>
            ) : null}
          </Flex>

          <Divider className="border-black/[6%] opacity-100" />

          <HStack spacing={1} gap="3">
            <Button variant="outline" colorScheme="primary" w="full" onClick={resetPOSState}>
              {t('Clear')}
            </Button>
            <Button
              type="button"
              variant="solid"
              colorScheme="green"
              w="full"
              isLoading={isOrderProcessing}
              disabled={!pos.POSItems.length || isOrderProcessing}
              rightIcon={<ArrowRight size={16} />}
              onClick={() => onPlaceOrder(pos)}
            >
              {t('Place Order')}
            </Button>
          </HStack>
        </Box>
      </div>
    </>
  );

  if (windowSize.width < 768) {
    return (
      <>
        <Button
          colorScheme="primary"
          className="absolute bottom-10 right-10 z-10 bg-primary-400 hover:bg-primary-500"
          onClick={onOpen}
        >
          <HStack>
            <Badge className="rounded-full" size="lg">
              {pos.POSItems.length}
            </Badge>
            <span> {t("POS's Cart")} </span>
          </HStack>
        </Button>
        <Drawer isOpen={isOpen} onClose={onClose} size="md">
          <DrawerContent>
            <DrawerHeader className="border-b border-b-black/[6%]">
              {t("POS's Cart")}
              <DrawerCloseButton />
            </DrawerHeader>

            <DrawerBody className="p-0">{content}</DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return content;
};

export default TablePOSCheckoutForm;
