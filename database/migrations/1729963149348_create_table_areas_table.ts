import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'table_areas';

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id'); // Primary key for TableArea
      table.string('name').notNullable();
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now());
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now());
    });
  }

  async down() {
    this.schema.dropTable(this.tableName); // Drops the table if migration is rolled back
  }
}
