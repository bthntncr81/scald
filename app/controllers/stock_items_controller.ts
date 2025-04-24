import { HttpContext } from '@adonisjs/core/http';
import StockItem from '#models/stock_item';
import errorHandler from '#exceptions/error_handler';

export default class StockItemsController {
  async index({ logger, request, response }: HttpContext) {
    try {
      const { page, limit } = request.qs();
      const dataQuery = StockItem.query().orderBy('created_at', 'desc');

      const data = page && limit ? await dataQuery.paginate(page, limit) : await dataQuery.exec();
      return response.json(data);
    } catch (error) {
      errorHandler(error, response, logger, 'Index Stock Items Error');
    }
  }

  async getById({ logger, request, response }: HttpContext) {
    const { id } = request.params();
    try {
      const data = await StockItem.query().where('id', id).firstOrFail();
      return response.json(data);
    } catch (error) {
      errorHandler(error, response, logger, 'Get Stock Item By Id Error');
    }
  }

  async store({ logger, request, response }: HttpContext) {
    try {
      const payload = request.only(['name', 'unit', 'quantity']);
      const stockItem = await StockItem.create(payload);

      return response.created({
        success: true,
        message: 'Stock item created successfully',
        content: stockItem,
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Store Stock Item Error');
    }
  }

  async update({ logger, request, response, params }: HttpContext) {
    try {
      const stockItem = await StockItem.findOrFail(params.id);
      const payload = request.only(['name', 'unit', 'quantity']);
      stockItem.merge(payload);
      await stockItem.save();

      return response.ok({
        success: true,
        message: 'Stock item updated successfully',
        content: stockItem,
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Update Stock Item Error');
    }
  }

  async delete({ logger, request, response }: HttpContext) {
    const { id } = request.params();
    try {
      const stockItem = await StockItem.findOrFail(id);
      await stockItem.delete();

      return response.json({
        success: true,
        message: 'Stock item deleted successfully',
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Delete Stock Item Error');
    }
  }
}
