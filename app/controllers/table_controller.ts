import { HttpContext } from '@adonisjs/core/http';
import Table from '#models/table'; // Make sure the path is correct
import errorHandler from '#exceptions/error_handler';
import { tableValidator } from '#validators/table';

export default class TablesController {
  // List all tables with pagination
  async index({ logger, request, response }: HttpContext) {
    try {
      const { page, limit } = request.qs();

      // tables ve table_areas tablolarını birleştiriyoruz
      const dataQuery = Table.query()
        .select(
          'tables.id',
          'tables.table_area_id',
          'tables.number',
          'tables.created_at',
          'tables.updated_at',
          'table_areas.name as table_area_name' // table_area_name olarak alıyoruz
        )
        .join('table_areas', 'tables.table_area_id', 'table_areas.id') // doğru şekilde ilişkilendiriyoruz
        .orderBy('tables.created_at', 'desc');

      // Sayfalama işlemini uygulayalım
      const data =
        page && limit
          ? await dataQuery.paginate(page, limit) // Sayfalama varsa kullan
          : await dataQuery.exec(); // Sayfalama yoksa tüm veriyi al
      // Veriyi formatlayarak sadece table verisini döndürelim

      var formattedData: any = {
        data: [],
      };
      data.forEach((item: any) => {
        var obj = {
          id: item.$attributes.id,
          tableAreaId: item.$attributes.tableAreaId,
          number: item.$attributes.number,
          createdAt: item.$attributes.createdAt,
          updatedAt: item.$attributes.updatedAt,
          tableAreaName: item.$extras.table_area_name, // Burada $extras içindeki table_area_name'i alıyoruz
        };
        formattedData.data.push(obj);
      });
      console.log(formattedData);

      // Yeni formatta sadece veriyi döndürelim
      return response.json(formattedData);
    } catch (error) {
      errorHandler(error, response, logger, 'Index Tables Error');
    }
  }
  // Get table by ID
  async getById({ logger, request, response }: HttpContext) {
    const { id } = request.params();
    try {
      const data = await Table.query().where('id', id).firstOrFail();
      return response.json(data);
    } catch (error) {
      errorHandler(error, response, logger, 'Get Table By Id Error');
    }
  }

  // Create a new table
  async store({ logger, request, response }: HttpContext) {
    try {
      const payload = await request.validateUsing(tableValidator); // Assuming you have a validation schema for tables
      const table = await Table.create(payload);

      return response.created({
        success: true,
        message: 'Table created successfully',
        content: table,
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Store Table Error');
    }
  }

  // Update a table
  async update({ logger, request, response, params }: HttpContext) {
    try {
      const table = await Table.findOrFail(params.id);
      const payload = await request.validateUsing(tableValidator);
      table.merge(payload);
      await table.save();

      return response.ok({
        success: true,
        message: 'Table updated successfully',
        content: table,
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Update Table Error');
    }
  }

  // Delete a table by ID
  async delete({ logger, request, response }: HttpContext) {
    const { id } = request.params();
    try {
      const table = await Table.findOrFail(id);
      await table.delete();

      return response.json({
        success: true,
        message: 'Table deleted successfully',
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Delete Table Error');
    }
  }

  // Bulk delete tables
  async bulkDelete({ logger, request, response }: HttpContext) {
    try {
      const { ids } = request.qs(); // Assuming the list of IDs comes from query string
      await Table.query().whereIn('id', ids).delete();

      return response.ok({
        success: true,
        message: 'Tables deleted successfully',
      });
    } catch (error) {
      errorHandler(error, response, logger, 'Bulk Delete Tables Error');
    }
  }
}
