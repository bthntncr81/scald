import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'stock_items';

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.string('unit').notNullable(); // örnek: gram, adet, dilim
      table.float('quantity').notNullable(); // ondalıklı değerler için float
      table.timestamp('created_at');
      table.timestamp('updated_at');
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
