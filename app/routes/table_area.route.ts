import router from '@adonisjs/core/services/router';
import { middleware } from '#start/kernel';
const TableAreasController = () => import('#controllers/table_area_controller');

// ✅ Customer-level routes (read-only)
router
  .group(() => {
    router.get('/', [TableAreasController, 'index']);
    router.get('/:id', [TableAreasController, 'getById']);
  })
  .prefix('/api/user/table-areas/')
  .use(middleware.auth({ guards: ['web'] }))
  .use(middleware.role({ guards: ['customer'] }));

// ✅ Admin/Manager-level routes (full CRUD)
router
  .group(() => {
    router.get('/', [TableAreasController, 'index']);
    router.get('/:id', [TableAreasController, 'getById']);
    router.post('/', [TableAreasController, 'store']);
    router.put('/:id', [TableAreasController, 'update']);
    router.delete('/:id', [TableAreasController, 'delete']);
    router.delete('/bulk/delete', [TableAreasController, 'bulkDelete']);
  })
  .prefix('/api/table-areas')
  .use(middleware.auth({ guards: ['web'] }))
  .use(middleware.role({ guards: ['admin', 'manager'] }));
