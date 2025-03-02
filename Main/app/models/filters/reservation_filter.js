import { BaseModelFilter } from 'adonis-lucid-filter';
import { DateTime } from 'luxon';
export default class ReservationFilter extends BaseModelFilter {
    tableNumber(value) {
        this.$query.where('tableNumber', value);
    }
    status(value) {
        this.$query.where('status', value);
    }
    reservationDate(value) {
        const formattedDate = DateTime.fromISO(value).toISODate();
        if (formattedDate) {
            this.$query.whereRaw('DATE(reservation_date) = ?', [formattedDate]);
        }
    }
    search(value) {
        this.$query.where((builder) => {
            builder.whereHas('user', (query) => {
                query.where('firstName', 'LIKE', `%${value}%`).orWhere('lastName', 'LIKE', `%${value}%`);
            });
        });
    }
}
//# sourceMappingURL=reservation_filter.js.map