import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm';
import type { BelongsTo } from '@adonisjs/lucid/types/relations';
import MenuItem from './menu_item.js';
import StockItem from './stock_item.js';

export default class MenuItemRecipe extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare menuItemId: number;

  @column()
  declare stockItemId: number;

  @column()
  declare amount: number;

  @column()
  declare unit: string;

  @belongsTo(() => MenuItem)
  declare menuItem: BelongsTo<typeof MenuItem>;

  @belongsTo(() => StockItem)
  declare stockItem: BelongsTo<typeof StockItem>;
}
