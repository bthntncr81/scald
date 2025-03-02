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
import { compose } from '@adonisjs/core/helpers';
import { Filterable } from 'adonis-lucid-filter';
import AddonFilter from '#models/filters/addon_filter';
import formatPrecision from '../utils/format_precision.js';
import { attachment, Attachmentable } from '@jrmc/adonis-attachment';
export default class Addon extends compose(BaseModel, Filterable, Attachmentable) {
    static $filter = () => AddonFilter;
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Addon.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Addon.prototype, "name", void 0);
__decorate([
    attachment({
        preComputeUrl: true,
        variants: ['thumbnail', 'orginal'],
    }),
    __metadata("design:type", Object)
], Addon.prototype, "image", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], Addon.prototype, "price", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], Addon.prototype, "isAvailable", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Addon.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Addon.prototype, "updatedAt", void 0);
__decorate([
    manyToMany(() => MenuItem, {
        pivotTable: 'item_addons',
        localKey: 'id',
        pivotForeignKey: 'addon_id',
        relatedKey: 'id',
        pivotRelatedForeignKey: 'menu_item_id',
        pivotTimestamps: true,
    }),
    __metadata("design:type", Object)
], Addon.prototype, "menuItems", void 0);
//# sourceMappingURL=addon.js.map