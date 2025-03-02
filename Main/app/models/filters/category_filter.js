import { BaseModelFilter } from 'adonis-lucid-filter';
export default class CategoryFilter extends BaseModelFilter {
    priority(value) {
        this.$query.where('priority', value);
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
//# sourceMappingURL=category_filter.js.map