import { BaseModelFilter } from 'adonis-lucid-filter';
export default class MenuItemFilter extends BaseModelFilter {
    discountType(value) {
        this.$query.where('discountType', value);
    }
    category(value) {
        this.$query.where('categoryId', value);
    }
    foodType(value) {
        this.$query.where('foodType', value);
    }
    recommended(value) {
        if (value === 'true') {
            this.$query.where('isRecommended', true);
        }
        if (value === 'false') {
            this.$query.where('isRecommended', false);
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
        this.$query.where('name', 'LIKE', `%${value}%`);
    }
}
//# sourceMappingURL=menu_item_filter.js.map