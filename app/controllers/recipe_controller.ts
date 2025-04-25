import { HttpContext } from '@adonisjs/core/http';
import MenuItemRecipe from '#models/menu_item_recipe';
import errorHandler from '#exceptions/error_handler';

export default class RecipeController {
  async index({ logger, request, response }: HttpContext) {
    try {
      const { page, limit } = request.qs();
      const dataQuery = MenuItemRecipe.query()
        .preload('menuItem')
        .preload('stockItem')
        .preload('variantOption')
        .orderBy('created_at', 'desc');

      const data = page && limit ? await dataQuery.paginate(page, limit) : await dataQuery.exec();

      const transformed = ('toJSON' in data ? (data as any).toJSON().data : data).map(
        (recipe: any) => ({
          id: recipe.id,
          menu_item_id: recipe.menuItem.id,
          stock_item_id: recipe.stockItem.id,
          variant_option_id: recipe.variantOption?.id || null,
          amount: recipe.amount,
          created_at: recipe.created_at,
          updated_at: recipe.updated_at,
          menu_item_name: recipe.menuItem?.name || '',
          stock_item_name: recipe.stockItem?.name || '',
          variant_option_name: recipe.variantOption?.name || '',
          unit: recipe.stockItem?.unit || '',
        })
      );

      return response.json({
        ...(page && limit ? { meta: (data as any).meta } : {}),
        data: transformed,
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Index Menu Item Recipes Error');
    }
  }

  async getById({ logger, request, response }: HttpContext) {
    const { id } = request.params();
    try {
      const data = await MenuItemRecipe.query().where('id', id).firstOrFail();
      return response.json(data);
    } catch (error) {
      errorHandler(error, response, logger, 'Get Menu Item Recipe By Id Error');
    }
  }

  async store({ logger, request, response }: HttpContext) {
    try {
      const payload = request.only([
        'menu_item_id',
        'stock_item_id',
        'amount',
        'unit',
        'variant_option_id',
      ]);
      const recipe = await MenuItemRecipe.create(payload);

      return response.created({
        success: true,
        message: 'Menu item recipe created successfully',
        content: recipe,
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Store Menu Item Recipe Error');
    }
  }

  async update({ logger, request, response, params }: HttpContext) {
    try {
      const recipe = await MenuItemRecipe.findOrFail(params.id);
      const payload = request.only([
        'menu_item_id',
        'stock_item_id',
        'amount',
        'unit',
        'variant_option_id',
      ]);
      recipe.merge(payload);
      await recipe.save();

      return response.ok({
        success: true,
        message: 'Menu item recipe updated successfully',
        content: recipe,
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Update Menu Item Recipe Error');
    }
  }

  async delete({ logger, request, response }: HttpContext) {
    const { id } = request.params();
    try {
      const recipe = await MenuItemRecipe.findOrFail(id);
      await recipe.delete();

      return response.json({
        success: true,
        message: 'Menu item recipe deleted successfully',
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Delete Menu Item Recipe Error');
    }
  }
}
