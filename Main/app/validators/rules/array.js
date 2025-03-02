import db from '@adonisjs/lucid/services/db';
import vine from '@vinejs/vine';
async function exist(ids, options, field) {
    if (!vine.helpers.isArray(ids)) {
        return;
    }
    const allIds = [];
    await Promise.all(ids.map(async (id) => {
        if (!id)
            return;
        const row = await db.from(options.table).where(options.column, id).first();
        if (!row) {
            allIds.push(id);
        }
    }));
    if (allIds.length > 0) {
        field.report(`${allIds.length === 1 ? 'ID' : 'IDs'} ${allIds.join(', ')} ${allIds.length === 1 ? "doesn't" : "don't"} exist in the ${options.table} table.`, 'database.exists', field);
    }
}
export const idsExist = vine.createRule(exist);
//# sourceMappingURL=array.js.map