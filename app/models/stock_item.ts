import { DateTime } from 'luxon';
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm';
import MenuItemRecipe from './menu_item_recipe.js';
import type { HasMany } from '@adonisjs/lucid/types/relations';

export default class StockItem extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare name: string;

  @column()
  declare unit: string; // örn: gram, adet, dilim

  @column()
  declare quantity: number;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null;

  @hasMany(() => MenuItemRecipe)
  declare recipes: HasMany<typeof MenuItemRecipe>;
}
