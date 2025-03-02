import { BaseModelFilter } from 'adonis-lucid-filter';
export default class ChargeFilter extends BaseModelFilter {
    type(value) {
        this.$query.where('type', value);
    }
    amountType(value) {
        this.$query.where('amountType', value);
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
        this.$query.where('name', 'LIKE', `%${value}%`);
    }
}
//# sourceMappingURL=charge_filter.js.map