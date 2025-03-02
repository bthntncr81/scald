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
import { compose } from '@adonisjs/core/helpers';
export default class Promotion extends compose(BaseModel, Attachmentable) {
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Promotion.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Promotion.prototype, "type", void 0);
__decorate([
    attachment({ preComputeUrl: true }),
    __metadata("design:type", Object)
], Promotion.prototype, "sliderImage", void 0);
__decorate([
    attachment({ preComputeUrl: true }),
    __metadata("design:type", Object)
], Promotion.prototype, "welcomeImage", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], Promotion.prototype, "welcomeStatus", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Promotion.prototype, "message", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Promotion.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Promotion.prototype, "updatedAt", void 0);
//# sourceMappingURL=promotion.js.map