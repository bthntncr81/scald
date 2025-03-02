import { BaseModelFilter } from 'adonis-lucid-filter';
export default class VariantFilter extends BaseModelFilter {
    allowMultiple(value) {
        if (value === 'true') {
            this.$query.where('allowMultiple', true);
        }
        if (value === 'false') {
            this.$query.where('allowMultiple', false);
        }
    }
    requirement(value) {
        this.$query.where('requirement', value);
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
//# sourceMappingURL=variant_filter.js.map