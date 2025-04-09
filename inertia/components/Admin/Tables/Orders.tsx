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
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { Eye } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { toast } from 'sonner';
import useWindowSize from '@/hooks/useWindowSize';

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
};

export default function ActiveOrdersDrawer({
  tableId,
  isIconButton = true,
}: ActiveOrdersDrawerProps) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const windowSize = useWindowSize();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [paymentType, setPaymentType] = useState<'cash' | 'card'>('cash'); // Set default to 'cash'

  useEffect(() => {
    if (isOpen) {
      axios
        .get(`/api/tables/getOrdersByTableId/${tableId}`)
        .then((res) => setOrders(res.data || []))
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
        onClose();
      })
      .catch(() => toast.error(t('Failed to update orders')));
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
            <Button colorScheme="green" onClick={handleCloseOrder} className="w-full">
              {t('Close Order')}
            </Button>

            <div className="w-full flex justify-between font-bold text-lg">
              <span>{t('Grand Total')}</span>
              <span>{getGrandTotal().toFixed(2)} ₺</span>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
