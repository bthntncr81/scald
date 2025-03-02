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
import Variant from '#models/variant';
import formatPrecision from '../utils/format_precision.js';
export default class VariantOption extends BaseModel {
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], VariantOption.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], VariantOption.prototype, "variantId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], VariantOption.prototype, "name", void 0);
__decorate([
    column({
        prepare: (value) => (value ? formatPrecision(value) : 0),
        consume: (value) => (value ? formatPrecision(value) : 0),
    }),
    __metadata("design:type", Number)
], VariantOption.prototype, "price", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], VariantOption.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], VariantOption.prototype, "updatedAt", void 0);
__decorate([
    belongsTo(() => Variant),
    __metadata("design:type", Object)
], VariantOption.prototype, "variant", void 0);
//# sourceMappingURL=variant_option.js.map