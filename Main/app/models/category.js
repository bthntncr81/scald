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
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm';
import { attachment, Attachmentable } from '@jrmc/adonis-attachment';
import MenuItem from '#models/menu_item';
import { Filterable } from 'adonis-lucid-filter';
import { compose } from '@adonisjs/core/helpers';
import CategoryFilter from '#models/filters/category_filter';
export default class Category extends compose(BaseModel, Filterable, Attachmentable) {
    static $filter = () => CategoryFilter;
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], Category.prototype, "priority", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], Category.prototype, "isAvailable", void 0);
__decorate([
    attachment({
        preComputeUrl: true,
        variants: ['thumbnail', 'orginal'],
    }),
    __metadata("design:type", Object)
], Category.prototype, "image", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Category.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Category.prototype, "updatedAt", void 0);
__decorate([
    hasMany(() => MenuItem),
    __metadata("design:type", Object)
], Category.prototype, "menuItems", void 0);
//# sourceMappingURL=category.js.map