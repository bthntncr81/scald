import { BaseModelFilter } from 'adonis-lucid-filter';
import { DateTime } from 'luxon';
export default class CouponFilter extends BaseModelFilter {
    type(value) {
        this.$query.where('type', value);
    }
    validFrom(value) {
        const formattedDate = DateTime.fromISO(value).toISODate();
        if (formattedDate) {
            this.$query.whereRaw('DATE(valid_from) = ?', [formattedDate]);
        }
    }
    validUntil(value) {
        const formattedDate = DateTime.fromISO(value).toISODate();
        if (formattedDate) {
            this.$query.whereRaw('DATE(valid_until) = ?', [formattedDate]);
        }
    }
    available(value) {
        if (value === 'true') {
            this.$query.where('isAvailable', true);
        }
        if (value === 'false') {
            this.$query.where('isAvailable', false);
        }
    }
    search(value) {
        this.$query.where((builder) => {
            builder.where('name', 'LIKE', `%${value}%`).orWhere('code', 'LIKE', `%${value}%`);
        });
    }
}
//# sourceMappingURL=coupon_filter.js.map