import CustomerLayout from '@/components/Customer/CustomerLayout';
import { convertToCurrencyFormat } from '@/utils/currency_formatter';
import { PageProps } from '@/types';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  Spinner,
} from '@chakra-ui/react';
import { Link, router, usePage } from '@inertiajs/react';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import { ArrowLeft } from 'iconsax-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
import { toast } from 'sonner';
import usePOS from '@/data/use_pos';
import { table } from 'console';

export default function Checkout() {
  const { t } = useTranslation();
  const {
    props: { auth },
  } = usePage() as { props: PageProps };
  const tableId = localStorage.getItem('tableId');
  const { data: paymentMethods } = useSWR('/api/user/payment-methods', fetcher);
  const cart = usePOS();
  const CheckoutFormSchema = Yup.object({
    firstName: Yup.string().when([], {
      is: () => cart.type === 'delivery' || tableId,
      then: (schema) => schema.required('First name is required'),
      otherwise: (schema) => schema.notRequired(),
    }),
    lastName: Yup.string().when([], {
      is: () => cart.type === 'delivery' || tableId,
      then: (schema) => schema.required('Last name is required'),
      otherwise: (schema) => schema.notRequired(),
    }),
    email: Yup.string()
      .email('Invalid email address')
      .when([], {
        is: () => cart.type === 'delivery' || tableId,
        then: (schema) => schema.required('Email is required'),
        otherwise: (schema) => schema.notRequired(),
      }),
    phoneNumber: Yup.string().when([], {
      is: () => cart.type === 'delivery' || tableId,
      then: (schema) => schema.required('Phone number is required'),
      otherwise: (schema) => schema.notRequired(),
    }),
    address: Yup.string().when([], {
      is: () => cart.type === 'delivery',
      then: (schema) => schema.required('Address is required'),
      otherwise: (schema) => schema.notRequired(),
    }),
    paymentMethod: Yup.string().when([], {
      is: () => true,
      then: (schema) => schema.required('Payment method is required'),
      otherwise: (schema) => schema.notRequired(),
    }),
  });
  const checkoutInputs = [
    {
      type: 'group',
      items: [
        {
          label: 'First name',
          name: 'firstName',
          type: 'text',
          placeholder: 'Enter your first name',
        },

        {
          label: 'First name',
          name: 'lastName',
          type: 'text',
          placeholder: 'Enter your last name',
        },
      ],
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email address',
      disabled: tableId ? false : true,
    },
    {
      label: 'Phone',
      name: 'phoneNumber',
      type: 'tel',
      placeholder: 'Enter your phone number',
    },
    {
      label: 'Address',
      name: 'address',
      type: 'text',
      placeholder: 'Enter your address',
    },
  ];

  useEffect(() => {
    if (!auth && !tableId) {
      window.location.href = window.location.origin + '/login';
    }
  }, []);

  const resetCartState = () => {
    cart.resetPOS();
  };
  if (!auth && !tableId) {
    return (
      <CustomerLayout>
        <div className="flex flex-col items-center justify-center h-screen">
          <Spinner />
        </div>
      </CustomerLayout>
    );
  }
  return (
    <CustomerLayout>
      <Formik
        initialValues={{
          firstName: auth ? auth.firstName : '',
          lastName: auth ? auth.lastName : '',
          email: auth ? auth.email : '',
          phoneNumber: auth ? auth.phoneNumber : '',
          address: auth ? auth.address : '',
          paymentMethod: '',
        }}
        validationSchema={CheckoutFormSchema}
        onSubmit={async (values, actions) => {
          // Format the data for submission
          const formattedData = {
            userId: tableId ? null : auth?.id,
            tableId: tableId ? tableId : null,
            discount: cart.discount,
            type: tableId ? 'dine_in' : cart?.type,
            paymentType: values?.paymentMethod,
            customerNote: cart.note,
            paymentStatus: false,
            customerName: tableId ? values.firstName + ' ' + values.lastName : '',
            customerAddresss: !auth ? values.address : '',
            customerNumber: !auth ? values.phoneNumber : '',
            customerMail: !auth ? values.email : '',
            deliveryDate: new Date().toISOString().split('T')[0],
            orderItems:
              cart.POSItems.map((item) => ({
                ...item,
                menuItemId: item.id,
                variants:
                  Array.from(item.variants.values()).map((variant) => ({
                    ...variant,
                    options: Array.from(variant.option.values()) || [],
                    optionIds: Array.from(variant.option.keys()) || [],
                  })) || [],

                addons:
                  Array.from(item.addons.values()).map((addon) => ({
                    ...addon,
                  })) || [],
              })) || [],
          };

          try {
            // update user data

            if (auth) {
              const { data, status } = await axios.put('/api/users/profile/update', values);
              if ((data?.success && status === 200) || status === 201) {
                // Create order
                const { data: orderResponseData } = await axios.post(
                  '/api/user/orders',
                  formattedData
                );

                if (orderResponseData?.success && formattedData?.paymentType === 'cash') {
                  // reset and cart redirect to success page
                  resetCartState();
                  router.visit('/confirm');
                }
                if (orderResponseData?.success && formattedData?.paymentType !== 'cash') {
                  // reset and redirect to payment gateway
                  resetCartState();
                  window.location.href = orderResponseData?.redirectUrl;
                }
              }
            } else {
              // Create order
              const { data: orderResponseData } = await axios.post(
                '/api/user/orders',
                formattedData
              );

              if (orderResponseData?.success && formattedData?.paymentType === 'cash') {
                // reset and cart redirect to success page
                resetCartState();
                router.visit('/confirm');
              }
              if (orderResponseData?.success && formattedData?.paymentType !== 'cash') {
                // reset and redirect to payment gateway
                resetCartState();
                window.location.href = orderResponseData?.redirectUrl;
              }
            }
          } catch (error) {
            toast.error(t(error.response.data.message || 'Failed to checkout'));
          } finally {
            actions.setSubmitting(false);
          }

          return;
        }}
      >
        {({ isSubmitting }) => (
          <main className="bg-white">
            <Form>
              <section className="container">
                <div className="flex items-center gap-4 py-9">
                  <IconButton
                    as={Link}
                    href="/"
                    aria-label="left arrow"
                    className="rounded-full min-w-14 min-h-14 bg-transparent border border-secondary-200"
                  >
                    <ArrowLeft />
                  </IconButton>
                  <h2 className="text-3xl">{t('Checkout')}</h2>
                </div>
                <div className="mb-10">
                  {cart.type === 'delivery' && <h4 className="mb-2">{t('Delivery address')}</h4>}
                  {(cart.type === 'delivery' || tableId) && (
                    <div className="max-w-[460px] mb-10">
                      <>
                        {checkoutInputs.map((item, index) =>
                          item.type === 'group' ? (
                            <div key={index} className="grid grid-cols-2 gap-4 mb-4">
                              {item.items?.map((subItem) => (
                                <Field name={subItem.name} key={subItem.name}>
                                  {({ field, meta }: { field: any; meta: any }) => (
                                    <FormControl isInvalid={!!(meta.touched && meta.error)}>
                                      <Input
                                        rounded="full"
                                        type={subItem.type}
                                        placeholder={t(subItem.placeholder)}
                                        className="h-12 bg-white"
                                        {...field}
                                      />
                                      <FormErrorMessage>{t(meta.error || '')}</FormErrorMessage>
                                    </FormControl>
                                  )}
                                </Field>
                              ))}
                            </div>
                          ) : // 👇 sadece adres inputuysa ve cart tipi delivery değilse render etme
                          item.name === 'address' && cart.type !== 'delivery' ? null : (
                            <Field name={item.name} key={index}>
                              {({ field, meta }: { field: any; meta: any }) => (
                                <FormControl isInvalid={!!(meta.touched && meta.error)}>
                                  <Input
                                    {...item}
                                    rounded="full"
                                    type={item.type}
                                    placeholder={t(item.placeholder || '')}
                                    className="h-12 bg-white mb-4"
                                    {...field}
                                  />
                                  <FormErrorMessage>{t(meta.error || '')}</FormErrorMessage>
                                </FormControl>
                              )}
                            </Field>
                          )
                        )}
                      </>
                    </div>
                  )}
                  <h4 className="mb-2">{t('Payment method')}</h4>
                  <div className="flex items-center gap-2">
                    <Field name="paymentMethod">
                      {({ field, meta, form }: { field: any; meta: any; form: any }) => (
                        <FormControl isInvalid={!!(meta.touched && meta.error)}>
                          <Flex className="gap-2">
                            {/* <Button
                              variant="outline"
                              colorScheme="outline"
                              data-selected={field.value === 'cash'}
                              className={`h-12 uppercase border rounded-full px-8 data-[selected=true]:border-primary-400 data-[selected=true]:text-primary-400 border-secondary-200 hover:border-primary-400 hover:text-primary-400`}
                              onClick={() => {
                                form.setFieldValue('paymentMethod', 'cash');
                                cart.changePaymentType('cash');
                              }}
                            >
                              Cash
                            </Button> */}

                            {paymentMethods?.content
                              ?.filter(
                                (item: any) =>
                                  item.key === 'iyzico' ||
                                  (item.key === 'iyzico_ceppos' &&
                                    auth &&
                                    auth.firstName &&
                                    auth.firstName.toLowerCase().includes('kiosk'))
                              )
                              .map((item: Record<string, any>) => (
                                <Button
                                  key={item.id}
                                  variant="outline"
                                  colorScheme="outline"
                                  data-selected={field.value === item.key}
                                  className={`h-12 uppercase border rounded-full px-8 data-[selected=true]:border-primary-400 data-[selected=true]:text-primary-400 border-secondary-200 hover:border-primary-400 hover:text-primary-400`}
                                  onClick={() => {
                                    form.setFieldValue('paymentMethod', item.key);
                                    cart.changePaymentType(item.key);
                                  }}
                                >
                                  {t(item.name)}
                                </Button>
                              ))}
                          </Flex>

                          <FormErrorMessage>{t(meta.error || '')}</FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </div>
                </div>
                <div className="max-w-[675px] py-10 border-t border-t-black/10">
                  <div className="flex justify-between items-center py-2 border-b border-black/5 px-4">
                    <p className="text-lg">{t('Total')}</p>
                    <p className="text-xl font-bold">{convertToCurrencyFormat(cart.total)}</p>
                  </div>
                  <div className="flex gap-4 items-center justify-between pt-3">
                    <Button
                      as={Link}
                      href="/"
                      variant="outline"
                      colorScheme="secondary"
                      className="button-outline"
                    >
                      {t('Back')}
                    </Button>
                    <Button
                      type="submit"
                      variant="solid"
                      colorScheme="primary"
                      className="button-primary"
                      disabled={isSubmitting}
                      isLoading={isSubmitting}
                    >
                      {t('Confirm order')}
                    </Button>
                  </div>
                </div>
              </section>
            </Form>
          </main>
        )}
      </Formik>
    </CustomerLayout>
  );
}
