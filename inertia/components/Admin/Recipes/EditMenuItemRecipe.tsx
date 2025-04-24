import axios from 'axios';
import { Form, Formik } from 'formik';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { Edit } from 'iconsax-react';
import { toast } from 'sonner';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FieldRenderer from '../FieldRenderer';
import useWindowSize from '@/hooks/useWindowSize';

export default function EditMenuItemRecipe({
  recipe,
  refresh,
}: {
  recipe: any;
  refresh: () => void;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const windowSize = useWindowSize();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();

  const [menuItems, setMenuItems] = useState([]);
  const [stockItems, setStockItems] = useState([]);
  const [selectedUnit, setSelectedUnit] = useState('');

  useEffect(() => {
    axios.get('/api/menu-items').then(({ data }) => setMenuItems(data));
    axios.get('/api/stock-items').then(({ data }) => {
      setStockItems(data);
      const found = data.find((s: any) => s.id === recipe.stock_item_id);
      setSelectedUnit(found?.unit || '');
    });
  }, [recipe.stock_item_id]);

  return (
    <>
      <Button
        variant="outline"
        colorScheme="blue"
        rightIcon={<Edit />}
        onClick={onOpen}
        ref={btnRef}
      >
        {t('Edit')}
      </Button>

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
            {t('Edit recipe')}
            <DrawerCloseButton className="sm:hidden" />
          </DrawerHeader>

          <Formik
            initialValues={{
              menu_item_id: recipe.menu_item_id,
              stock_item_id: recipe.stock_item_id,
              amount: recipe.amount,
            }}
            onSubmit={async (values, actions) => {
              try {
                actions.setSubmitting(true);
                const payload = {
                  menu_item_id: values.menu_item_id,
                  stock_item_id: values.stock_item_id,
                  amount: values.amount,
                };
                const { data } = await axios.put(`/api/menu-item-recipes/${recipe.id}`, payload);
                if (data?.success) {
                  onClose();
                  refresh();
                  toast.success(t(data.message));
                }
              } catch (e) {
                toast.error(t(e.response?.data?.message || 'Something went wrong'));
              } finally {
                actions.setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Form className="flex flex-1 flex-col overflow-y-auto">
                <DrawerBody className="space-y-4 h-full flex-1 overflow-y-auto">
                  <Select
                    value={values.menu_item_id}
                    placeholder={t('Select menu item')}
                    onChange={(e) => setFieldValue('menu_item_id', e.target.value)}
                  >
                    {menuItems.map((item: any) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Select>

                  <Select
                    value={values.stock_item_id}
                    placeholder={t('Select stock item')}
                    onChange={(e) => {
                      const id = e.target.value;
                      setFieldValue('stock_item_id', id);
                      const found = stockItems.find((s: any) => s.id == id) as any;
                      setSelectedUnit(found?.unit || '');
                    }}
                  >
                    {stockItems.map((item: any) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Select>

                  <div className="flex items-center gap-2">
                    <FieldRenderer
                      item={{
                        name: 'amount',
                        label: 'Amount',
                        type: 'number',
                        placeholder: 'Amount',
                      }}
                      setFieldValue={setFieldValue}
                    />
                    <span className="text-sm mt-6">{selectedUnit}</span>
                  </div>
                </DrawerBody>

                <DrawerFooter
                  borderTopWidth="1px"
                  borderColor="secondary.200"
                  className="bg-white w-full"
                >
                  <Button variant="outline" w="full" mr={3} onClick={onClose}>
                    {t('Cancel')}
                  </Button>
                  <Button
                    variant="solid"
                    colorScheme="primary"
                    w="full"
                    type="submit"
                    isLoading={isSubmitting}
                    className="bg-primary-400 hover:bg-primary-500"
                    rightIcon={<Edit />}
                  >
                    {t('Save')}
                  </Button>
                </DrawerFooter>
              </Form>
            )}
          </Formik>
        </DrawerContent>
      </Drawer>
    </>
  );
}
