var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DateTime } from 'luxon';
import { BaseModel, column } from '@adonisjs/lucid/orm';
import { Filterable } from 'adonis-lucid-filter';
import { compose } from '@adonisjs/core/helpers';
import CouponFilter from '#models/filters/coupon_filter';
import formatPrecision from '../utils/format_precision.js';
export default class Coupon extends compose(BaseModel, Filterable) {
    static $filter = () => CouponFilter;
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Coupon.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Coupon.prototype, "name", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Coupon.prototype, "code", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Coupon.prototype, "type", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Coupon.prototype, "discountType", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], Coupon.prototype, "discount", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Coupon.prototype, "maxUsage", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Coupon.prototype, "minPurchase", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Coupon.prototype, "maxDiscount", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Coupon.prototype, "usageCount", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], Coupon.prototype, "costUsed", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Coupon.prototype, "validFrom", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Coupon.prototype, "validUntil", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], Coupon.prototype, "isAvailable", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Coupon.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Coupon.prototype, "updatedAt", void 0);
//# sourceMappingURL=coupon.js.map