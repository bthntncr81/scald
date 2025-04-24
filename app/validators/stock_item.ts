import vine from '@vinejs/vine';

export const createStockItemValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(255),
    unit: vine.string().maxLength(50),
    quantity: vine.number(),
  })
);

export const updateStockItemValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(255).optional(),
    unit: vine.string().maxLength(50).optional(),
    quantity: vine.number().optional(),
  })
);
