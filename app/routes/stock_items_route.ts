import router from '@adonisjs/core/services/router';
import { middleware } from '#start/kernel';
const StockItemsController = () => import('#controllers/stock_items_controller');

// ✅ Admin/Manager-level routes (full CRUD)
router
  .group(() => {
    router.get('/', [StockItemsController, 'index']);
    router.get('/:id', [StockItemsController, 'getById']);
    router.post('/', [StockItemsController, 'store']);
    router.put('/:id', [StockItemsController, 'update']);
    router.delete('/:id', [StockItemsController, 'delete']);
  })
  .prefix('/api/stock-items')
  .use(middleware.auth({ guards: ['web'] }))
  .use(middleware.role({ guards: ['admin', 'manager'] }));
