import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'item_variants';

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table
        .integer('menu_item_id')
        .unsigned()
        .references('id')
        .inTable('menu_items')
        .onDelete('CASCADE');
      table
        .integer('variant_id')
        .unsigned()
        .references('id')
        .inTable('variants')
        .onDelete('CASCADE');

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now());
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now());
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
