import router from '@adonisjs/core/services/router';
const OrdersController = () => import('#controllers/orders_controller');
import { middleware } from '#start/kernel';

router
  .group(() => {
    router.get('/', [OrdersController, 'index']);
    router.get('/:id', [OrdersController, 'getById']);
    router.get('/:id/generate-invoice', [OrdersController, 'generateInvoice']);
    router.post('/calculate', [OrdersController, 'calculate']);
  })
  .prefix('/api/user/orders')
  .use(middleware.auth({ guards: ['web'] }))
  .use(middleware.role({ guards: ['customer'] }));

router
  .group(() => {
    router.post('/', [OrdersController, 'store']);
  })
  .prefix('/api/user/orders');

router
  .get('/api/orders/', [OrdersController, 'adminIndex'])
  .use(middleware.auth({ guards: ['web'] }))
  .use(middleware.role({ guards: ['admin', 'manager', 'pos', 'display', 'kitchen'] }));

router
  .group(() => {
    router.get('/export/all', [OrdersController, 'exportOrders']);
    router.get('/:id/generate-invoice', [OrdersController, 'generateInvoice']);
    router.get('/count/status', [OrdersController, 'orderStatusCount']);
    router.post('/', [OrdersController, 'store']);
    router.post('/updateOrderItemsPaidQuantity', [
      OrdersController,
      'updateOrderItemsPaidQuantity',
    ]);
    router.post('/move-table', [OrdersController, 'moveOrdersToAnotherTable']);
    router.delete('/deleteOrderItem/:id', [OrdersController, 'deleteOrderItem']);
    router.patch('/reduceOrderItemQuantity', [OrdersController, 'reduceOrderItemQuantity']);
    router.post('/calculate', [OrdersController, 'calculate']);
    router.post('/updatePaymentStatus', [OrdersController, 'updatePaymentStatus']);
    router.put('/:id', [OrdersController, 'update']);
    router.patch('/bulk/update', [OrdersController, 'bulkCustomUpdate']);
    router.delete('/:id', [OrdersController, 'delete']);
  })
  .prefix('/api/orders')
  .use(middleware.auth({ guards: ['web'] }))
  .use(middleware.role({ guards: ['admin', 'manager', 'pos'] }));

router
  .group(() => {
    router.get('/:id', [OrdersController, 'getById']);
    router.patch('/:id', [OrdersController, 'customUpdate']);
  })
  .prefix('/api/orders')
  .use(middleware.auth({ guards: ['web'] }))
  .use(middleware.role({ guards: ['admin', 'manager', 'pos', 'kitchen'] }));
