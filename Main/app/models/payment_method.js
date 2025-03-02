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
import { attachment, Attachmentable } from '@jrmc/adonis-attachment';
import { Filterable } from 'adonis-lucid-filter';
import { compose } from '@adonisjs/core/helpers';
import PaymentMethodFilter from './filters/payment_method_filter.js';
export default class PaymentMethod extends compose(BaseModel, Attachmentable, Filterable) {
    static $filter = () => PaymentMethodFilter;
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], PaymentMethod.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], PaymentMethod.prototype, "name", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], PaymentMethod.prototype, "key", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], PaymentMethod.prototype, "status", void 0);
__decorate([
    attachment({
        preComputeUrl: true,
    }),
    __metadata("design:type", Object)
], PaymentMethod.prototype, "logo", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], PaymentMethod.prototype, "public", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], PaymentMethod.prototype, "secret", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], PaymentMethod.prototype, "webhook", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], PaymentMethod.prototype, "mode", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], PaymentMethod.prototype, "currencies", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], PaymentMethod.prototype, "countries", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], PaymentMethod.prototype, "extraParams", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], PaymentMethod.prototype, "config", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], PaymentMethod.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], PaymentMethod.prototype, "updatedAt", void 0);
//# sourceMappingURL=payment_method.js.map