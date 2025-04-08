import { DateTime } from 'luxon';
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm';
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations';

import Order from '#models/order';
import TableArea from './table_area.js';

export default class Table extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare tableAreaId: number;

  @column()
  declare number: number;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null;

  @belongsTo(() => TableArea)
  declare tableArea: BelongsTo<typeof TableArea>;

  @hasMany(() => Order)
  declare orders: HasMany<typeof Order>;
}
