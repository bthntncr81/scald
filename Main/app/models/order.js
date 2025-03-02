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
import { BaseModel, beforeCreate, belongsTo, column, hasMany } from '@adonisjs/lucid/orm';
import { generateUniqueOrderNumber } from '../utils/generate_unique_id.js';
import OrderItem from '#models/order_item';
import { Filterable } from 'adonis-lucid-filter';
import { compose } from '@adonisjs/core/helpers';
import OrderFilter from '#models/filters/order_filter';
import User from '#models/user';
import formatPrecision from '../utils/format_precision.js';
import OrderCharge from '#models/order_charge';
export default class Order extends compose(BaseModel, Filterable) {
    static $filter = () => OrderFilter;
    static async assignOrderNumber(order) {
        order.orderNumber = await generateUniqueOrderNumber();
    }
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Order.prototype, "orderNumber", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Order.prototype, "userId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Order.prototype, "type", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Order.prototype, "totalQuantity", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], Order.prototype, "total", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], Order.prototype, "totalTax", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], Order.prototype, "totalCharges", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], Order.prototype, "discount", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], Order.prototype, "manualDiscount", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], Order.prototype, "deliveryCharge", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], Order.prototype, "grandTotal", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Order.prototype, "paymentType", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], Order.prototype, "paymentStatus", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Order.prototype, "paymentInfo", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Order.prototype, "customerNote", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Order.prototype, "deliveryDate", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Order.prototype, "status", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Order.prototype, "deliveryManId", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Order.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Order.prototype, "updatedAt", void 0);
__decorate([
    belongsTo(() => User),
    __metadata("design:type", Object)
], Order.prototype, "user", void 0);
__decorate([
    belongsTo(() => User, { foreignKey: 'deliveryManId' }),
    __metadata("design:type", Object)
], Order.prototype, "deliveryMan", void 0);
__decorate([
    hasMany(() => OrderItem),
    __metadata("design:type", Object)
], Order.prototype, "orderItems", void 0);
__decorate([
    hasMany(() => OrderCharge),
    __metadata("design:type", Object)
], Order.prototype, "orderCharges", void 0);
__decorate([
    beforeCreate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Order]),
    __metadata("design:returntype", Promise)
], Order, "assignOrderNumber", null);
//# sourceMappingURL=order.js.map