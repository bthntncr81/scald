import vine from '@vinejs/vine';

export const tableValidator = vine.compile(
  vine.object({
    table_area_id: vine
      .number()
      .positive() // Ensures it's a positive number
      .optional(),
    number: vine
      .number()
      .positive() // Ensures the table number is a positive number
      .min(1) // Optional: Sets a minimum table number (e.g., 1)
      .max(100), // Optional: Sets a maximum table number (e.g., 100)
  })
);

export const tableUpdateValidator = vine.compile(
  vine.object({
    table_area_id: vine
      .number()
      .positive() // Ensures it's a positive number
      .optional(),
    number: vine
      .number()
      .positive() // Ensures the table number is a positive number
      .min(1) // Optional: Sets a minimum table number (e.g., 1)
      .max(100) // Optional: Sets a maximum table number (e.g., 100)
      .optional(),
  })
);
