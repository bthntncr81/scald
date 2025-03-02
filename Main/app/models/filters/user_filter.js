import { BaseModelFilter } from 'adonis-lucid-filter';
export default class UserFilter extends BaseModelFilter {
    suspended(value) {
        if (value === 'true') {
            this.$query.where('isSuspended', true);
        }
        if (value === 'false') {
            this.$query.where('isSuspended', false);
        }
    }
    emailVerified(value) {
        if (value === 'true') {
            this.$query.where('isEmailVerified', true);
        }
        if (value === 'false') {
            this.$query.where('isEmailVerified', false);
        }
    }
    search(value) {
        this.$query.where((builder) => {
            builder
                .where('firstName', 'LIKE', `%${value}%`)
                .orWhere('lastName', 'LIKE', `%${value}%`)
                .orWhere('email', 'LIKE', `%${value}%`)
                .orWhere('phoneNumber', 'LIKE', `${value}`);
        });
    }
}
//# sourceMappingURL=user_filter.js.map