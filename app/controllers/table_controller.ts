import { HttpContext } from '@adonisjs/core/http';
import Table from '#models/table'; // Make sure the path is correct
import errorHandler from '#exceptions/error_handler';
import { tableValidator } from '#validators/table';
import Order from '#models/order';
export default class TablesController {
  // List all tables with pagination
  async index({ logger, request, response }: HttpContext) {
    try {
      const { page, limit, search } = request.qs();

      // Tüm masaları al, ayrı bir sorguda ödeme yapılmamış siparişlerin toplam tutarını toplayacağız
      const baseQuery = Table.query()
        .select(
          'tables.id',
          'tables.table_area_id',
          'tables.number',
          'tables.created_at',
          'tables.updated_at',
          'table_areas.name as table_area_name'
        )
        .join('table_areas', 'tables.table_area_id', 'table_areas.id')
        .orderBy('tables.created_at', 'desc');

      if (search) {
        baseQuery.whereRaw(`CONCAT(tables.number, ' ', table_areas.name) LIKE ?`, [`%${search}%`]);
      }

      const allTables =
        page && limit ? await baseQuery.paginate(page, limit) : await baseQuery.exec();

      // Her bir masaya ait ödeme yapılmamış siparişlerin toplam tutarını topla
      const unpaidTotals = await Order.query()
        .where('payment_status', false)
        .select('table_id')
        .sum('grand_total as total')
        .groupBy('table_id');

      const totalMap = Object.fromEntries(
        unpaidTotals.map((item: any) => {
          return [item.$attributes.tableId, Number(item.$attributes.total)];
        })
      );

      const formattedData: any = {
        data: [],
      };
      allTables.forEach((item: any) => {
        formattedData.data.push({
          id: item.id,
          tableAreaId: item.tableAreaId,
          number: item.number,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          tableAreaName: item.$extras.table_area_name,
          totalPrice: totalMap[item.id] || 0,
        });
      });

      return response.json(formattedData);
    } catch (error) {
      errorHandler(error, response, logger, 'Index Tables Error');
    }
  }
  // Get unpaid orders by Table ID
  async getOrdersByTableId({ logger, request, response }: HttpContext) {
    const { id } = request.params();

    try {
      const orders = await Order.query()
        .where('table_id', id)
        .andWhere('payment_status', false)
        .preload('orderItems') // opsiyonel: ilişkili verileri yüklemek istersen
        .orderBy('created_at', 'desc');

      return response.json(orders);
    } catch (error) {
      errorHandler(error, response, logger, 'Get Orders By Table Id Error');
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
