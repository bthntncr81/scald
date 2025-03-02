import { BaseModelFilter } from 'adonis-lucid-filter';
export default class AddonFilter extends BaseModelFilter {
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
//# sourceMappingURL=addon_filter.js.map