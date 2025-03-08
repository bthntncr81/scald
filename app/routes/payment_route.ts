import router from '@adonisjs/core/services/router';
const PaymentsController = () => import('#controllers/payments_controller');
import { middleware } from '#start/kernel';

router
  .group(() => {
    router.get('/paypal/success', [PaymentsController, 'capturePayPalOrder']);
    router.get('/paypal/cancel', [PaymentsController, 'cancelPaypalOrder']);
    router.get('/stripe/success', [PaymentsController, 'retrieveStripeSession']);
    router.get('/stripe/cancel', [PaymentsController, 'cancelStripeSession']);
    router.get('/iyzico/success/:orderId', [PaymentsController, 'successIyzico']);
    router.get('/iyzico/cancel/:orderId', [PaymentsController, 'cancelIyzico']);
  })
  .prefix('/payments')
  .use(middleware.auth({ guards: ['web'] }));
