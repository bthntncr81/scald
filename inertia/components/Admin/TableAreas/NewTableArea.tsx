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
  useDisclosure,
} from '@chakra-ui/react';
import { Add } from 'iconsax-react';
import { toast } from 'sonner';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import FieldRenderer from '../FieldRenderer';
import useWindowSize from '@/hooks/useWindowSize';

export default function NewTableArea({ refresh }: { refresh: () => void }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const windowSize = useWindowSize();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();

  // Define fields for table_area creation (only 'name' now)
  const fieldItems = [
    { name: 'name', label: 'Name', type: 'text', placeholder: 'Table area name' },
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
        {t('Create new table area')}
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
            {t('Create new table area')}
            <DrawerCloseButton className="sm:hidden" />
          </DrawerHeader>

          <Formik
            initialValues={{
              name: '',
            }}
            onSubmit={async (values: any, actions) => {
              try {
                actions.setSubmitting(true);

                // Format multipart form data for submission
                const formData = new FormData();
                for (const key in values) {
                  if (Array.isArray(values[key])) {
                    if (values[key].length === 0) {
                      formData.append(`${key}[]`, '');
                    }
                    values[key].forEach((item) => formData.append(`${key}[]`, item ?? ''));
                  } else {
                    formData.append(key, values[key]);
                  }
                }

                const { data } = await axios.post('/api/table-areas', formData, {
                  headers: { 'Content-Type': 'multipart/form-data' },
                });

                if (data?.success) {
                  onClose();
                  refresh();
                  toast.success(t(data?.message) || t('Table area created successfully'));
                }
              } catch (e) {
                if (Array.isArray(e.response.data.messages)) {
                  e.response.data.messages.forEach((msg: { field: string; message: string }) => {
                    actions.setFieldError(msg.field, t(msg.message));
                  });
                } else {
                  toast.error(t(e.response.data.message) || t('Something went wrong'));
                }
              } finally {
                actions.setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting, setFieldValue }) => (
              <Form className="flex flex-1 flex-col overflow-y-auto">
                <DrawerBody className="space-y-4 h-full flex-1 overflow-y-auto">
                  <div className="flex flex-col gap-5 border-b border-black/5 pb-4">
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
                    {t('Create')}
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
