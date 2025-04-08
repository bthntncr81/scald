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
import { Add } from 'iconsax-react';
import { toast } from 'sonner';
import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import FieldRenderer from '../FieldRenderer';
import useWindowSize from '@/hooks/useWindowSize';

export default function NewTable({
  refresh,
  table,
}: {
  refresh: () => void;
  table?: { id: number; number: number; table_area_id: number };
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const windowSize = useWindowSize();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();

  const [tableAreas, setTableAreas] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    axios
      .get('/api/table-areas', { params: { limit: 50 } }) // adjust params if needed
      .then((res) => {
        return setTableAreas(res.data || []);
      })
      .catch(() => toast.error(t('Failed to fetch table areas')));
  }, []);

  const fieldItems = [
    { name: 'number', label: 'Table Number', type: 'number', placeholder: 'Table number' },
  ];

  return (
    <>
      <Button
        variant="solid"
        colorScheme="primary"
        className="bg-primary-400 hover:bg-primary-500"
        rightIcon={<Add />}
        onClick={onOpen}
      >
        {t(table ? 'Edit table' : 'Create new table')}
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
            {t(table ? 'Edit table' : 'Create new table')}
            <DrawerCloseButton className="sm:hidden" />
          </DrawerHeader>

          <Formik
            initialValues={{
              number: table?.number || '',
              table_area_id: table?.table_area_id || '',
            }}
            onSubmit={async (values: any, actions) => {
              try {
                actions.setSubmitting(true);

                const formData = new FormData();
                for (const key in values) {
                  formData.append(key, values[key]);
                }

                const { data } = await axios[table ? 'put' : 'post'](
                  `/api/tables${table ? `/${table.id}` : ''}`,
                  formData,
                  {
                    headers: { 'Content-Type': 'multipart/form-data' },
                  }
                );

                if (data?.success) {
                  onClose();
                  refresh();
                  toast.success(t(data?.message) || t('Table created/updated successfully'));
                }
              } catch (e) {
                if (Array.isArray(e.response?.data?.messages)) {
                  e.response.data.messages.forEach((msg: { field: string; message: string }) => {
                    actions.setFieldError(msg.field, t(msg.message));
                  });
                } else {
                  toast.error(t(e.response?.data?.message) || t('Something went wrong'));
                }
              } finally {
                actions.setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, setFieldValue, values, handleChange }) => (
              <Form className="flex flex-1 flex-col overflow-y-auto">
                <DrawerBody className="space-y-4 h-full flex-1 overflow-y-auto">
                  <div className="flex flex-col gap-5 border-b border-black/5 pb-4">
                    {/* Table Area Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t('Table Area')}
                      </label>
                      <Select
                        name="table_area_id"
                        value={values.table_area_id}
                        onChange={handleChange}
                        placeholder={t('Select a table area')}
                      >
                        {tableAreas.map((area) => (
                          <option key={area.id} value={area.id}>
                            {area.name}
                          </option>
                        ))}
                      </Select>
                    </div>

                    {/* Other fields */}
                    {fieldItems.map((item) => (
                      <FieldRenderer key={item.name} item={item} setFieldValue={setFieldValue} />
                    ))}
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
                    rightIcon={<Add />}
                  >
                    {t(table ? 'Save' : 'Create')}
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
