import { HttpContext } from '@adonisjs/core/http';
import TableArea from '#models/table_area'; // Make sure the path is correct
import errorHandler from '#exceptions/error_handler';
import { createTableAreaValidator, updateTableAreaValidator } from '#validators/table_area';

export default class TableAreasController {
  // List all table areas with pagination
  async index({ logger, request, response }: HttpContext) {
    try {
      const { page, limit } = request.qs();
      const dataQuery = TableArea.query().orderBy('created_at', 'desc');

      const data = page && limit ? await dataQuery.paginate(page, limit) : await dataQuery.exec();

      return response.json(data);
    } catch (error) {
      errorHandler(error, response, logger, 'Index Table Areas Error');
    }
  }

  // Get table area by ID
  async getById({ logger, request, response }: HttpContext) {
    const { id } = request.params();
    try {
      const data = await TableArea.query().where('id', id).firstOrFail();
      return response.json(data);
    } catch (error) {
      errorHandler(error, response, logger, 'Get Table Area By Id Error');
    }
  }

  // Create a new table area
  async store({ logger, request, response }: HttpContext) {
    try {
      const payload = await request.validateUsing(createTableAreaValidator); // Assuming you have a validation schema for table areas
      const tableArea = await TableArea.create(payload);

      return response.created({
        success: true,
        message: 'Table area created successfully',
        content: tableArea,
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Store Table Area Error');
    }
  }

  // Update a table area
  async update({ logger, request, response, params }: HttpContext) {
    try {
      const tableArea = await TableArea.findOrFail(params.id);
      const payload = await request.validateUsing(updateTableAreaValidator);
      tableArea.merge(payload);
      await tableArea.save();

      return response.ok({
        success: true,
        message: 'Table area updated successfully',
        content: tableArea,
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Update Table Area Error');
    }
  }

  // Delete a table area by ID
  async delete({ logger, request, response }: HttpContext) {
    const { id } = request.params();
    try {
      const tableArea = await TableArea.findOrFail(id);
      await tableArea.delete();

      return response.json({
        success: true,
        message: 'Table area deleted successfully',
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Delete Table Area Error');
    }
  }

  // Bulk delete table areas
  async bulkDelete({ logger, request, response }: HttpContext) {
    try {
      const { ids } = request.qs(); // Assuming the list of IDs comes from query string
      await TableArea.query().whereIn('id', ids).delete();

      return response.ok({
        success: true,
        message: 'Table areas deleted successfully',
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Bulk Delete Table Areas Error');
    }
  }
}
