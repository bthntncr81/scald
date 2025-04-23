// NewMenuItem.tsx
import useWindowSize from '@/hooks/useWindowSize';
import NewMenuItemSchema from '@/schemas/NewMenuItemSchema';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { Form, Formik } from 'formik';
import { Add, ArrowLeft, ArrowRight, MoreCircle, TickCircle } from 'iconsax-react';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import MenuItemFormFieldRenderer from './MenuItemFormFieldRenderer';

const initSteps = [
  { id: 'information', title: 'Basic information and pricing', isComplete: false },
  { id: 'add-ons', title: 'Variation and add-ons', isComplete: false },
];

export default function NewMenuItem({ refresh }: { refresh?: () => void }) {
  const { t } = useTranslation();
  const btnRef = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState<'information' | 'add-ons'>('information');
  const [steps, setSteps] = useState(initSteps);
  const windowSize = useWindowSize();
  const [isTaxIncluded, setIsTaxIncluded] = useState(false);
  const [taxRate, setTaxRate] = useState(0);

  const fieldItems = [
    {
      heading: 'Basic information',
      fields: [
        { name: 'name', type: 'text', placeholder: 'Item name' },
        { name: 'description', type: 'textarea', placeholder: 'Item description' },
        { name: 'image', label: 'Item image', type: 'file' },
        { name: 'categoryId', label: 'Category', type: 'combobox-category' },
        {
          name: 'foodType',
          label: 'Food type',
          type: 'radio-group',
          options: [
            { label: 'Veg', value: 'veg' },
            { label: 'Non-veg', value: 'nonVeg' },
          ],
        },
      ],
    },
    {
      heading: t('Pricing'),
      fields: [
        { name: 'price', label: '', type: 'number', placeholder: t('Enter regular price') },
        { name: 'discount', label: t('Discount'), type: 'number', placeholder: t('Add discount') },
        {
          name: 'discountType',
          label: t('Discount type'),
          type: 'radio-group',
          placeholder: '',
          options: [
            { label: t('Amount ($)'), value: 'amount' },
            { label: t('Percentage (%)'), value: 'percentage' },
          ],
        },
        {
          name: 'chargeIds',
          label: t('Add tax and charges'),
          type: 'tag-charges',
          placeholder: t('Search or add'),
        },
      ],
    },
  ];

  const handleOnSubmit = async (values: any, actions: any) => {
    try {
      debugger;
      actions.setSubmitting(true);

      if (values.price && values.chargeIds?.length === 1 && isTaxIncluded && taxRate > 0) {
        const grossPrice = parseFloat(values.price);
        values.price = (grossPrice / (1 + taxRate / 100)).toFixed(2);
      }

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

      const { data } = await axios.post(`/api/menu-items`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (data?.content?.id) {
        refresh?.();
        toast.success(t('Menu item created successfully'));
        actions.resetForm();
        setActiveTab('information');
        setSteps(initSteps);
      }
    } catch (e) {
      toast.error(t(e.response?.data?.message || 'Something went wrong'));
    } finally {
      actions.setSubmitting(false);
    }
  };

  const initialValues = {
    name: '',
    description: '',
    categoryId: '',
    foodType: '',
    price: '',
    discount: '0',
    priority: 1,
    discountType: 'amount',
    isAvailable: true,
    image: '',
    chargeIds: [],
    addonIds: [],
    variantIds: [],
  };

  return (
    <>
      <Box>
        <Button
          w="full"
          color="white"
          bg="primary.400"
          gap="2"
          rounded="6px"
          px={4}
          onClick={onOpen}
        >
          {t('Create new item')} <Add size={14} />
        </Button>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement={windowSize.width < 640 ? 'bottom' : 'right'}
        size="md"
        onClose={() => {
          onClose();
          setActiveTab('information');
          setSteps(initSteps);
        }}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="@container h-[80%] sm:h-auto rounded-t-xl sm:rounded-none">
          <DrawerHeader className="border-b border-black/5 hidden @md:flex">
            <HStack gap={0} className="w-full">
              {steps.map((step) => (
                <Button
                  data-selected={activeTab === step.id}
                  data-complete={step.isComplete}
                  key={step.id}
                  w="full"
                  className="bg-transparent border-t-2 text-sm data-[selected=true]:border-primary-400"
                >
                  {step.isComplete ? <TickCircle size={16} /> : <MoreCircle size={16} />}
                  <Text>{t(step.title)}</Text>
                </Button>
              ))}
            </HStack>
          </DrawerHeader>

          <Formik
            initialValues={initialValues}
            validationSchema={NewMenuItemSchema}
            onSubmit={handleOnSubmit}
          >
            {({ isSubmitting, submitForm, errors }) => (
              <Form className="flex flex-col flex-1" style={{ overflow: 'auto' }}>
                <DrawerBody>
                  {activeTab === 'information' &&
                    fieldItems.map((group) => (
                      <Box key={group.heading} p={6}>
                        <h2 className="text-lg font-semibold">{t(group.heading)}</h2>
                        {group.fields.map((field) => (
                          <MenuItemFormFieldRenderer
                            key={field.name}
                            {...field}
                            isTaxIncluded={isTaxIncluded}
                            taxRate={taxRate}
                            onTaxIncludedChange={setIsTaxIncluded}
                            onTaxRateChange={setTaxRate}
                          />
                        ))}
                      </Box>
                    ))}

                  {activeTab === 'add-ons' && (
                    <>
                      <Box p={6}>
                        <h2 className="text-lg font-semibold">{t('Variant')}</h2>
                        <MenuItemFormFieldRenderer name="variantIds" type="tag-variants" />
                      </Box>
                      <Box p={6}>
                        <h2 className="text-lg font-semibold">{t('Addon')}</h2>
                        <MenuItemFormFieldRenderer name="addonIds" type="tag-addons" />
                      </Box>
                    </>
                  )}
                </DrawerBody>
                <DrawerFooter>
                  {activeTab === 'information' ? (
                    <>
                      <Button variant="outline" mr={3} onClick={onClose}>
                        {t('Cancel')}
                      </Button>
                      <Button
                        colorScheme="primary"
                        onClick={() => {
                          setActiveTab('add-ons');
                          setSteps((s) =>
                            s.map((v) => (v.id === 'information' ? { ...v, isComplete: true } : v))
                          );
                        }}
                        rightIcon={<ArrowRight size={16} />}
                      >
                        {t('Next')}
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        mr={3}
                        onClick={() => setActiveTab('information')}
                        leftIcon={<ArrowLeft size={16} />}
                      >
                        {t('Back')}
                      </Button>
                      <Button
                        colorScheme="primary"
                        isLoading={isSubmitting}
                        onClick={() => {
                          if (Object.keys(errors).length) {
                            toast.error(t('Please fill all the fields'));
                          }
                          submitForm();
                        }}
                        rightIcon={<Add size={16} />}
                      >
                        {t('Create')}
                      </Button>
                    </>
                  )}
                </DrawerFooter>
              </Form>
            )}
          </Formik>
        </DrawerContent>
      </Drawer>
    </>
  );
}
