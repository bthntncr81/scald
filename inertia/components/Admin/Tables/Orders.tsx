import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { Eye, Trash } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { toast } from 'sonner';
import useWindowSize from '@/hooks/useWindowSize';
import { debug } from 'console';

type Addon = {
  id: number;
  name: string;
  price: number;
};

type Variant = {
  id: number;
  name: string;
};

type OrderItem = {
  id: number;
  name: string;
  quantity: number;
  totalPrice: number;
  addons?: Addon[];
  variants?: Variant[];
};

type Order = {
  id: number;
  createdAt: string;
  orderNumber: string;
  grandTotal: number;
  orderItems: OrderItem[];
};

type ActiveOrdersDrawerProps = {
  tableId: number;
  isIconButton?: boolean;
  refresh: () => void;
};

export default function ActiveOrdersDrawer({
  tableId,
  isIconButton = true,
  refresh,
}: ActiveOrdersDrawerProps) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const windowSize = useWindowSize();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [paymentType, setPaymentType] = useState<'cash' | 'card'>('cash'); // Set default to 'cash'
  const [expandedItems, setExpandedItems] = useState<
    {
      id: string;
      name: string;
      price: number;
      checked: boolean;
      itemId: number;
      quantity: number;
      paidQuantity: number;
    }[]
  >([]);

  useEffect(() => {
    if (isOpen) {
      axios
        .get(`/api/tables/getOrdersByTableId/${tableId}`)
        .then((res) => {
          const rawOrders = res.data || [];
          setOrders(rawOrders);
          const expanded: {
            id: string;
            name: string;
            price: number;
            checked: boolean;
            itemId: number;
            quantity: number;
            paidQuantity: number;
          }[] = [];
          rawOrders.forEach((order: any) => {
            order.orderItems.forEach((item: any) => {
              const paidQty = item.paidQuantity ?? 0;
              const quantity = item.quantity ?? 0;

              // Tüm ödemesi tamamlanan ürünleri listeleme
              if (paidQty >= quantity) return;

              const unitPrice = item.totalPrice;

              for (let i = 0; i < quantity - paidQty; i++) {
                expanded.push({
                  id: `${order.id}_${item.id}_${i}`,
                  name: item.name,
                  price: unitPrice,
                  checked: false, // Ödenmişse otomatik seçili
                  itemId: item.id,
                  quantity: quantity,
                  paidQuantity: paidQty,
                });
              }
            });
          });
          setExpandedItems(expanded);
        })
        .catch(() => toast.error(t('Failed to load orders')));
    }
  }, [isOpen, tableId]);

  const getGrandTotal = () => orders.reduce((sum, order) => sum + order.grandTotal, 0);

  // Handle Close Order and Update Payment Status
  const handleCloseOrder = () => {
    const orderIds = orders.map((order) => order.id);
    axios
      .post('/api/orders/updatePaymentStatus', { orderIds, paymentType })
      .then(() => {
        toast.success(t('Orders updated successfully'));
        refresh();
        onClose();
      })
      .catch(() => toast.error(t('Failed to update orders')));
  };

  const paidTotal = expandedItems.reduce((sum, item) => (item.checked ? sum + item.price : sum), 0);

  // Handle Partial Payment for Selected Items
  const handlePartialPayment = () => {
    const itemMap: Record<string, { orderItemId: number; paidQuantity: number }> = {};
    expandedItems.forEach((item) => {
      const [orderId, itemId] = item.id.split('_').map(Number);
      if (!itemMap[itemId]) {
        itemMap[itemId] = { orderItemId: itemId, paidQuantity: item.paidQuantity };
      }
      if (item.checked) {
        itemMap[itemId].paidQuantity += 1;
      }
    });

    const updates = Object.values(itemMap);
    axios
      .post('/api/orders/updateOrderItemsPaidQuantity', { updates })
      .then(() => {
        toast.success(t('Selected items marked as paid.'));
        refresh();
        onClose();
      })
      .catch(() => toast.error(t('Failed to update paid quantities')));
  };

  return (
    <>
      {isIconButton ? (
        <IconButton
          aria-label="View Orders"
          icon={<Eye size="18" />}
          colorScheme="blue"
          className="hover:bg-blue-100"
          variant="outline"
          onClick={onOpen}
        />
      ) : (
        <Button
          aria-label="View Orders"
          rightIcon={<Eye size="18" />}
          colorScheme="blue"
          className="hover:bg-blue-100"
          variant="outline"
          onClick={onOpen}
        >
          {t('View Orders')}
        </Button>
      )}

      <Drawer
        isOpen={isOpen}
        placement={windowSize.width < 640 ? 'bottom' : 'right'}
        size="md"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="h-[80%] sm:h-auto rounded-xl sm:rounded-none">
          <DrawerHeader className="border-b border-black/5">
            {t('Orders for Table')} #{tableId}
            <DrawerCloseButton className="sm:hidden" />
          </DrawerHeader>

          <DrawerBody className="space-y-6">
            {orders.length === 0 ? (
              <p>{t('No active orders for this table.')}</p>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="border border-gray-200 rounded-md p-4 space-y-3">
                  <div className="font-semibold">
                    {t('Order')} #{order.orderNumber} - {new Date(order.createdAt).toLocaleString()}
                  </div>

                  <div className="space-y-2">
                    {order.orderItems.map((item) => (
                      <div key={item.id} className="text-sm space-y-1">
                        <div className="flex justify-between font-medium">
                          <span>
                            {item.name} × {item.quantity}
                          </span>
                          <span>{item.totalPrice.toFixed(2)} ₺</span>
                        </div>

                        {/* Varyantlar */}
                        {item.variants && item.variants.length > 0 && (
                          <div className="pl-3 text-gray-600">
                            {item.variants.map((variant: any) => (
                              <div key={variant.id}>• {variant.variantOptions[0].name}</div>
                            ))}
                          </div>
                        )}

                        {/* Eklentiler */}
                        {item.addons && item.addons.length > 0 && (
                          <div className="pl-3 text-gray-600">
                            {item.addons.map((addon) => (
                              <div key={addon.id}>
                                • {addon.name} (+{addon.price.toFixed(2)} ₺)
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="font-medium flex justify-between pt-2 border-t border-gray-100">
                    <span>{t('Total')}</span>
                    <span>{order.grandTotal.toFixed(2)} ₺</span>
                  </div>
                </div>
              ))
            )}

            <div className="border-t pt-4 mt-4">
              <div className="font-semibold mb-2">{t('Unpaid Items')}</div>
              <div className="flex flex-wrap gap-2">
                {expandedItems.map((item, index) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        const updated = [...expandedItems];
                        const idx = updated.findIndex((x) => x.id === item.id);
                        updated[idx].checked = !updated[idx].checked;
                        setExpandedItems(updated);
                      }}
                      className={`px-3 py-1 rounded-md border text-sm font-medium ${
                        item.checked
                          ? 'bg-green-500 text-white border-green-600'
                          : 'bg-white text-gray-800 border-gray-300'
                      }`}
                    >
                      {item.name} – {item.price.toFixed(2)} ₺
                    </button>
                    <Popover>
                      <PopoverTrigger>
                        <IconButton
                          icon={<Trash size="16" />}
                          aria-label="Delete"
                          size="sm"
                          variant="ghost"
                          colorScheme="red"
                        />
                      </PopoverTrigger>
                      <PopoverContent width="fit-content">
                        <PopoverArrow />
                        <PopoverBody>
                          <p className="text-sm mb-2">{t('Are you sure to remove this item?')}</p>
                          <Button
                            colorScheme="red"
                            size="sm"
                            onClick={() => {
                              const updated = [...expandedItems];
                              const occurrences = updated.filter(
                                (x) => x.itemId === item.itemId
                              ).length;

                              if (occurrences <= 1) {
                                axios
                                  .delete(`/api/orders/deleteOrderItem/${item.itemId}`)
                                  .then(() => {
                                    setExpandedItems(
                                      updated.filter((x) => x.itemId !== item.itemId)
                                    );
                                    toast.success(t('Item deleted'));
                                    refresh();
                                  })
                                  .catch(() => toast.error(t('Failed to delete item')));
                              } else {
                                // Remove only one instance visually
                                const indexToRemove = updated.findIndex((x) => x.id === item.id);
                                updated.splice(indexToRemove, 1);
                                setExpandedItems(updated);
                                // Send PATCH to reduce quantity
                                axios
                                  .patch(`/api/orders/reduceOrderItemQuantity`, {
                                    itemId: item.itemId,
                                  })
                                  .then(() => toast.success(t('Item quantity reduced')))
                                  .catch(() => toast.error(t('Failed to reduce quantity')));
                              }
                            }}
                          >
                            {t('Confirm')}
                          </Button>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </div>
                ))}
              </div>
            </div>
          </DrawerBody>

          <DrawerFooter className="bg-white w-full border-t border-black/5 flex flex-col items-start space-y-4 py-4">
            <div className="w-full">
              <RadioGroup
                onChange={(value) => setPaymentType(value as 'cash' | 'card')}
                value={paymentType}
              >
                <Stack direction="row">
                  <Radio value="cash">{t('Cash')}</Radio>
                  <Radio value="card">{t('Card')}</Radio>
                </Stack>
              </RadioGroup>
            </div>
            {/* Partial Pay Button: show if at least one item is selected and not all are checked */}
            {expandedItems.some((item) => item.checked) &&
              expandedItems.some((item) => !item.checked) && (
                <Button colorScheme="blue" onClick={handlePartialPayment} className="w-full">
                  {t('Pay Selected Items')}
                </Button>
              )}
            <Button colorScheme="green" onClick={handleCloseOrder} className="w-full">
              {t('Close Order')}
            </Button>

            <div className="w-full flex justify-between font-bold text-lg">
              <span>{t('Grand Total')}</span>
              <span>{paidTotal.toFixed(2)} ₺</span>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
