import router from '@adonisjs/core/services/router';
import { middleware } from '#start/kernel';
const RecipeController = () => import('#controllers/recipe_controller');

router
  .group(() => {
    router.get('/', [RecipeController, 'index']);
    router.get('/:id', [RecipeController, 'getById']);
    router.post('/', [RecipeController, 'store']);
    router.put('/:id', [RecipeController, 'update']);
    router.delete('/:id', [RecipeController, 'delete']);
  })
  .prefix('/api/menu-item-recipes')
  .use(middleware.auth({ guards: ['web'] }))
  .use(middleware.role({ guards: ['admin', 'manager'] }));
