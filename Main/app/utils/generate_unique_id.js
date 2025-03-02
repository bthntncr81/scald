import { customAlphabet } from 'nanoid';
import Order from '#models/order';
import { DateTime } from 'luxon';
export function generateNanoId(length = 6) {
    const nanoId = customAlphabet('1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ', length);
    return nanoId();
}
export async function generateUniqueOrderNumber() {
    const currentDate = DateTime.now();
    const formattedDate = currentDate.toFormat('yyMMdd');
    const records = await Order.query()
        .whereRaw('DATE(created_at) = ?', [currentDate.toISODate()])
        .orderBy('id', 'desc');
    const formattedSequenceNumber = `${records.length + 1}`;
    return `ORD-${formattedDate}-${formattedSequenceNumber}`;
}
//# sourceMappingURL=generate_unique_id.js.map