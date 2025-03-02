import { BaseModelFilter } from 'adonis-lucid-filter';
export default class PaymentMethodFilter extends BaseModelFilter {
    name(value) {
        this.$query.where('name', value);
    }
}
//# sourceMappingURL=payment_method_filter.js.map