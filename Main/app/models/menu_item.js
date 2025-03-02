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
import { BaseModel, belongsTo, column, hasMany, manyToMany } from '@adonisjs/lucid/orm';
import { attachment, Attachmentable } from '@jrmc/adonis-attachment';
import Category from '#models/category';
import Charge from '#models/charge';
import Addon from '#models/addon';
import Variant from '#models/variant';
import { Filterable } from 'adonis-lucid-filter';
import { compose } from '@adonisjs/core/helpers';
import MenuItemFilter from '#models/filters/menu_item_filter';
import formatPrecision from '../utils/format_precision.js';
import OrderItem from '#models/order_item';
export default class MenuItem extends compose(BaseModel, Filterable, Attachmentable) {
    static $filter = () => MenuItemFilter;
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], MenuItem.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], MenuItem.prototype, "categoryId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], MenuItem.prototype, "name", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], MenuItem.prototype, "description", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], MenuItem.prototype, "foodType", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], MenuItem.prototype, "price", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], MenuItem.prototype, "discount", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], MenuItem.prototype, "discountType", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], MenuItem.prototype, "isAvailable", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], MenuItem.prototype, "isRecommended", void 0);
__decorate([
    attachment({
        preComputeUrl: true,
        variants: ['thumbnail', 'orginal'],
    }),
    __metadata("design:type", Object)
], MenuItem.prototype, "image", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], MenuItem.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], MenuItem.prototype, "updatedAt", void 0);
__decorate([
    belongsTo(() => Category),
    __metadata("design:type", Object)
], MenuItem.prototype, "category", void 0);
__decorate([
    manyToMany(() => Charge, {
        pivotTable: 'item_charges',
        localKey: 'id',
        pivotForeignKey: 'menu_item_id',
        relatedKey: 'id',
        pivotRelatedForeignKey: 'charge_id',
        pivotTimestamps: true,
    }),
    __metadata("design:type", Object)
], MenuItem.prototype, "charges", void 0);
__decorate([
    manyToMany(() => Addon, {
        pivotTable: 'item_addons',
        localKey: 'id',
        pivotForeignKey: 'menu_item_id',
        relatedKey: 'id',
        pivotRelatedForeignKey: 'addon_id',
        pivotTimestamps: true,
    }),
    __metadata("design:type", Object)
], MenuItem.prototype, "addons", void 0);
__decorate([
    manyToMany(() => Variant, {
        pivotTable: 'item_variants',
        localKey: 'id',
        pivotForeignKey: 'menu_item_id',
        relatedKey: 'id',
        pivotRelatedForeignKey: 'variant_id',
        pivotTimestamps: true,
    }),
    __metadata("design:type", Object)
], MenuItem.prototype, "variants", void 0);
__decorate([
    hasMany(() => OrderItem),
    __metadata("design:type", Object)
], MenuItem.prototype, "orderItems", void 0);
//# sourceMappingURL=menu_item.js.map