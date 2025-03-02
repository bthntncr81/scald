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
export default class BusinessSetup extends compose(BaseModel, Attachmentable) {
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], BusinessSetup.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "name", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "email", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "phone", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "address", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "country", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], BusinessSetup.prototype, "timeZone", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], BusinessSetup.prototype, "timeFormat", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], BusinessSetup.prototype, "maintenanceMode", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], BusinessSetup.prototype, "dineIn", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], BusinessSetup.prototype, "delivery", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], BusinessSetup.prototype, "pickup", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], BusinessSetup.prototype, "deliveryCharge", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], BusinessSetup.prototype, "currencyCode", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], BusinessSetup.prototype, "currencySymbolPosition", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], BusinessSetup.prototype, "guestCheckout", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], BusinessSetup.prototype, "loginOnlyVerifiedEmail", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], BusinessSetup.prototype, "sortCategories", void 0);
__decorate([
    attachment({ preComputeUrl: true }),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "logo", void 0);
__decorate([
    attachment({ preComputeUrl: true }),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "minimizedLogo", void 0);
__decorate([
    attachment({ preComputeUrl: true }),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "favicon", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "theme", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "companySlogan", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "copyrightText", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "facebook", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "instagram", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "twitter", void 0);
__decorate([
    attachment({ preComputeUrl: true }),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "aboutUsImage", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "aboutUsHeading", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "aboutUsDescription", void 0);
__decorate([
    attachment({ preComputeUrl: true }),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "contactUsImage", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "termsAndConditions", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "privacyPolicy", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], BusinessSetup.prototype, "returnPolicy", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], BusinessSetup.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], BusinessSetup.prototype, "updatedAt", void 0);
//# sourceMappingURL=business_setup.js.map