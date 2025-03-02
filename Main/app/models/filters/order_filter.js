import { BaseModelFilter } from 'adonis-lucid-filter';
import { DateTime } from 'luxon';
export default class OrderFilter extends BaseModelFilter {
    createdAt(value) {
        const formattedDate = DateTime.fromISO(value).toISODate();
        if (formattedDate) {
            this.$query.whereRaw('DATE(created_at) = ?', [formattedDate]);
        }
    }
    user(value) {
        this.$query.where('userId', value);
    }
    deliveryMan(value) {
        this.$query.where('deliveryManId', value);
    }
    type(value) {
        this.$query.where('type', value);
    }
    status(value) {
        this.$query.where('status', value);
    }
    deliveryDate(value) {
        const formattedDate = DateTime.fromISO(value).toISODate();
        if (formattedDate) {
            this.$query.whereRaw('DATE(delivery_date) = ?', [formattedDate]);
        }
    }
    paymentType(value) {
        this.$query.where('paymentType', value);
    }
    paymentStatus(value) {
        if (value === 'true') {
            this.$query.where('paymentStatus', true);
        }
        if (value === 'false') {
            this.$query.where('paymentStatus', false);
        }
    }
    search(value) {
        this.$query.where((builder) => {
            builder.where('orderNumber', 'Like', `%${value}%`).orWhereHas('user', (query) => {
                query.where('firstName', 'LIKE', `%${value}%`).orWhere('lastName', 'LIKE', `%${value}%`);
            });
        });
    }
}
//# sourceMappingURL=order_filter.js.map