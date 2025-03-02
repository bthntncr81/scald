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
import formatPrecision from '../utils/format_precision.js';
import Order from '#models/order';
export default class OrderCharge extends BaseModel {
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], OrderCharge.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], OrderCharge.prototype, "orderId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], OrderCharge.prototype, "name", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], OrderCharge.prototype, "type", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], OrderCharge.prototype, "amount", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], OrderCharge.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], OrderCharge.prototype, "updatedAt", void 0);
__decorate([
    belongsTo(() => Order),
    __metadata("design:type", Object)
], OrderCharge.prototype, "order", void 0);
//# sourceMappingURL=order_charge.js.map