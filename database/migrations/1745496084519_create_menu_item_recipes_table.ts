import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'menu_item_recipes';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table
        .integer('menu_item_id')
        .unsigned()
        .references('id')
        .inTable('menu_items')
        .onDelete('CASCADE');
      table
        .integer('stock_item_id')
        .unsigned()
        .references('id')
        .inTable('stock_items')
        .onDelete('CASCADE');
      table.float('amount').notNullable(); // 30, 50 vs.
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now());
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now());
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
