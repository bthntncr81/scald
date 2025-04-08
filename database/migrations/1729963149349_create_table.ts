import { BaseSchema } from '@adonisjs/lucid/schema';

export default class extends BaseSchema {
  protected tableName = 'tables'; // Use the correct table name here

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id'); // Primary key

      // Add the tableAreaId column to reference the TableArea model
      table
        .integer('table_area_id')
        .unsigned()
        .references('id')
        .inTable('table_areas')
        .onDelete('CASCADE');

      // Add the number column
      table.integer('number').notNullable();

      // Timestamp columns for created_at and updated_at
      table.timestamp('created_at', { useTz: true }).defaultTo(this.now());
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now());
    });
  }

  async down() {
    this.schema.dropTable(this.tableName);
  }
}
