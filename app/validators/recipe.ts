import vine from '@vinejs/vine';

export const createMenuItemRecipeValidator = vine.compile(
  vine.object({
    menu_item_id: vine.number(),
    stock_item_id: vine.number(),
    amount: vine.number(),
    unit: vine.string().maxLength(50),
  })
);

export const updateMenuItemRecipeValidator = vine.compile(
  vine.object({
    menu_item_id: vine.number().optional(),
    stock_item_id: vine.number().optional(),
    amount: vine.number().optional(),
    unit: vine.string().maxLength(50).optional(),
  })
);
