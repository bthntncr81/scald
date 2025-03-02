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
import { BaseModel, column, hasMany, manyToMany } from '@adonisjs/lucid/orm';
import VariantOption from '#models/variant_option';
import MenuItem from '#models/menu_item';
import { Filterable } from 'adonis-lucid-filter';
import { compose } from '@adonisjs/core/helpers';
import VariantFilter from '#models/filters/variant_filter';
export default class Variant extends compose(BaseModel, Filterable) {
    static $filter = () => VariantFilter;
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Variant.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Variant.prototype, "name", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Variant.prototype, "value", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], Variant.prototype, "allowMultiple", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Variant.prototype, "requirement", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Variant.prototype, "min", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Variant.prototype, "max", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], Variant.prototype, "isAvailable", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Variant.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Variant.prototype, "updatedAt", void 0);
__decorate([
    hasMany(() => VariantOption),
    __metadata("design:type", Object)
], Variant.prototype, "variantOptions", void 0);
__decorate([
    manyToMany(() => MenuItem, {
        pivotTable: 'item_variants',
        localKey: 'id',
        pivotForeignKey: 'variant_id',
        relatedKey: 'id',
        pivotRelatedForeignKey: 'menu_item_id',
        pivotTimestamps: true,
    }),
    __metadata("design:type", Object)
], Variant.prototype, "menuItems", void 0);
//# sourceMappingURL=variant.js.map