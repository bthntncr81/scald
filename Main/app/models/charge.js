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
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm';
import MenuItem from '#models/menu_item';
import { Filterable } from 'adonis-lucid-filter';
import { compose } from '@adonisjs/core/helpers';
import ChargeFilter from '#models/filters/charge_filter';
import formatPrecision from '../utils/format_precision.js';
export default class Charge extends compose(BaseModel, Filterable) {
    static $filter = () => ChargeFilter;
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Charge.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Charge.prototype, "name", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Charge.prototype, "type", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], Charge.prototype, "amount", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Charge.prototype, "amountType", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], Charge.prototype, "isAvailable", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Charge.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Charge.prototype, "updatedAt", void 0);
__decorate([
    manyToMany(() => MenuItem, {
        pivotTable: 'item_charges',
        localKey: 'id',
        pivotForeignKey: 'charge_id',
        relatedKey: 'id',
        pivotRelatedForeignKey: 'menu_item_id',
        pivotTimestamps: true,
    }),
    __metadata("design:type", Object)
], Charge.prototype, "menuItems", void 0);
//# sourceMappingURL=charge.js.map