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
  useDisclosure,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Edit2 } from 'iconsax-react';
import axios from 'axios';
import { toast } from 'sonner';
import { Form, Formik } from 'formik';
import useWindowSize from '@/hooks/useWindowSize';

type EditTableAreaProps = {
  tableArea: { id: number; name: string }; // Include tableArea in the props
  refresh: () => void;
  isIconButton?: boolean;
};

export default function EditTableArea({
  tableArea, // Destructure tableArea prop
  refresh,
  isIconButton = true,
}: EditTableAreaProps) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const windowSize = useWindowSize();
  const btnRef = useRef<HTMLButtonElement>(null);
  const [initialName] = useState(tableArea.name); // Access name from tableArea prop

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
            {t('Edit Table Area')}
            <DrawerCloseButton className="sm:hidden" />
          </DrawerHeader>

          <Formik
            initialValues={{ name: initialName }}
            onSubmit={async (values, actions) => {
              try {
                actions.setSubmitting(true);
                const { data } = await axios.put(`/api/table-areas/${tableArea.id}`, {
                  name: values.name,
                });

                if (data?.message) {
                  toast.success(t(data.message) || t('Table area updated successfully'));
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
                  <div className="flex flex-col gap-5 border-b border-black/5 pb-4">
                    <label htmlFor="name" className="text-sm font-medium">
                      {t('Name')}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      placeholder={t('Enter table area name')}
                    />
                  </div>
                </DrawerBody>
                <DrawerFooter
                  borderTopWidth="1px"
                  borderColor="secondary.200"
                  className="bg-white w-full bottom-0"
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
