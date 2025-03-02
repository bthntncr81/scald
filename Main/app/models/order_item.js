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
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm';
import Order from '#models/order';
import { Filterable } from 'adonis-lucid-filter';
import { compose } from '@adonisjs/core/helpers';
import formatPrecision from '../utils/format_precision.js';
import MenuItem from '#models/menu_item';
export default class OrderItem extends compose(BaseModel, Filterable) {
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], OrderItem.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], OrderItem.prototype, "orderId", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], OrderItem.prototype, "menuItemId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], OrderItem.prototype, "name", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], OrderItem.prototype, "description", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "price", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], OrderItem.prototype, "variants", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], OrderItem.prototype, "addons", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], OrderItem.prototype, "charges", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "addonsAmount", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "variantsAmount", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "taxAmount", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "chargeAmount", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "discountAmount", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "totalPrice", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], OrderItem.prototype, "grandPrice", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], OrderItem.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], OrderItem.prototype, "updatedAt", void 0);
__decorate([
    belongsTo(() => Order),
    __metadata("design:type", Object)
], OrderItem.prototype, "order", void 0);
__decorate([
    belongsTo(() => MenuItem),
    __metadata("design:type", Object)
], OrderItem.prototype, "menuItem", void 0);
//# sourceMappingURL=order_item.js.map