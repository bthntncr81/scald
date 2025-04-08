import router from '@adonisjs/core/services/router';
import { middleware } from '#start/kernel';
const TablesController = () => import('#controllers/table_controller');

// ✅ Routes for customers (view only)
router
  .group(() => {
    router.get('/', [TablesController, 'index']);
    router.get('/:id', [TablesController, 'getById']);
  })
  .prefix('/api/user/tables')
  .use(middleware.auth({ guards: ['web'] }))
  .use(middleware.role({ guards: ['customer'] }));

// ✅ Routes for admin/manager (full access)
router
  .group(() => {
    router.get('/', [TablesController, 'index']);
    router.get('/:id', [TablesController, 'getById']);
    router.post('/', [TablesController, 'store']);
    router.put('/:id', [TablesController, 'update']);
    router.delete('/:id', [TablesController, 'delete']);
    router.delete('/bulk/delete', [TablesController, 'bulkDelete']);
  })
  .prefix('/api/tables')
  .use(middleware.auth({ guards: ['web'] }))
  .use(middleware.role({ guards: ['admin', 'manager'] }));
