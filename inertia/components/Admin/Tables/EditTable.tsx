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
  Input,
  Select,
  useDisclosure,
} from '@chakra-ui/react';
import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Edit2 } from 'iconsax-react';
import axios from 'axios';
import { toast } from 'sonner';
import { Form, Formik } from 'formik';
import useWindowSize from '@/hooks/useWindowSize';

type TableArea = {
  id: number;
  name: string;
};

type EditTableProps = {
  table: { id: number; number: number; tableAreaId: number };
  refresh: () => void;
  isIconButton?: boolean;
};

export default function EditTable({ table, refresh, isIconButton = true }: EditTableProps) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const windowSize = useWindowSize();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [tableAreas, setTableAreas] = useState<TableArea[]>([]);

  useEffect(() => {
    if (isOpen) {
      axios
        .get('/api/table-areas')
        .then((res) => setTableAreas(res.data || []))
        .catch(() => toast.error(t('Failed to load table areas')));
    }
  }, [isOpen]);

  return (
    <>
      {isIconButton ? (
        <IconButton
          aria-label="Edit"
          icon={<Edit2 size="18" />}
          colorScheme="blue"
          className="hover:bg-blue-100"
          variant="outline"
          onClick={onOpen}
        />
      ) : (
        <Button
          aria-label="Edit"
          rightIcon={<Edit2 size="18" />}
          colorScheme="blue"
          className="hover:bg-blue-100"
          variant="outline"
          onClick={onOpen}
        >
          {t('Edit')}
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
            {t('Edit Table')}
            <DrawerCloseButton className="sm:hidden" />
          </DrawerHeader>

          <Formik
            initialValues={{
              number: table.number,
              tableAreaId: table.tableAreaId,
            }}
            onSubmit={async (values, actions) => {
              try {
                actions.setSubmitting(true);
                const { data } = await axios.put(`/api/tables/${table.id}`, {
                  number: values.number,
                  tableAreaId: values.tableAreaId,
                });

                if (data?.message) {
                  toast.success(t(data.message) || t('Table updated successfully'));
                  refresh();
                  onClose();
                }
              } catch (e) {
                toast.error(t(e?.response?.data?.message) || t('Something went wrong'));
              } finally {
                actions.setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, handleChange, values }) => (
              <Form className="flex-1 overflow-y-auto flex flex-col">
                <DrawerBody className="space-y-4 flex-1">
                  <div className="flex flex-col gap-2 border-b border-black/5 pb-4">
                    <label htmlFor="number" className="text-sm font-medium">
                      {t('Table Number')}
                    </label>
                    <Input
                      id="number"
                      name="number"
                      value={values.number}
                      onChange={handleChange}
                      placeholder={t('Enter table number')}
                    />
                  </div>

                  <div className="flex flex-col gap-2 pb-4">
                    <label htmlFor="tableAreaId" className="text-sm font-medium">
                      {t('Table Area')}
                    </label>
                    <Select
                      id="tableAreaId"
                      name="tableAreaId"
                      value={values.tableAreaId}
                      onChange={handleChange}
                      placeholder={t('Select table area')}
                    >
                      {tableAreas.map((area) => (
                        <option key={area.id} value={area.id}>
                          {area.name}
                        </option>
                      ))}
                    </Select>
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
