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
export default class Setting extends compose(BaseModel, Attachmentable) {
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Setting.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Setting.prototype, "key", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], Setting.prototype, "status", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Setting.prototype, "value1", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Setting.prototype, "value2", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Setting.prototype, "value3", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Setting.prototype, "value4", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Setting.prototype, "value5", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Setting.prototype, "value6", void 0);
__decorate([
    attachment({ preComputeUrl: true }),
    __metadata("design:type", Object)
], Setting.prototype, "file", void 0);
__decorate([
    attachment({ preComputeUrl: true }),
    __metadata("design:type", Object)
], Setting.prototype, "file2", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Setting.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Setting.prototype, "updatedAt", void 0);
//# sourceMappingURL=setting.js.map