import vine from '@vinejs/vine';

export const createTableAreaValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(255),
  })
);

export const updateTableAreaValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(255).optional(), // Allow optional update for name
  })
);
