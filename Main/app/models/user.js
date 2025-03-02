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
import hash from '@adonisjs/core/services/hash';
import { compose } from '@adonisjs/core/helpers';
import { BaseModel, belongsTo, column, computed, hasMany } from '@adonisjs/lucid/orm';
import { withAuthFinder } from '@adonisjs/auth/mixins/lucid';
import { DbRememberMeTokensProvider } from '@adonisjs/auth/session';
import Role from '#models/role';
import Token from '#models/token';
import { Filterable } from 'adonis-lucid-filter';
import UserFilter from '#models/filters/user_filter';
import Order from '#models/order';
const AuthFinder = withAuthFinder(() => hash.use('scrypt'), {
    uids: ['email'],
    passwordColumnName: 'password',
});
export default class User extends compose(BaseModel, AuthFinder, Filterable) {
    static $filter = () => UserFilter;
    static rememberMeTokens = DbRememberMeTokensProvider.forModel(User);
    get fullName() {
        return `${this.firstName ?? ''} ${this.lastName ?? ''}`.trim();
    }
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Number)
], User.prototype, "roleId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], User.prototype, "lastName", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], User.prototype, "isEmailVerified", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    column({ serializeAs: null }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], User.prototype, "isSuspended", void 0);
__decorate([
    column(),
    __metadata("design:type", Boolean)
], User.prototype, "notificationSound", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], User.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", Object)
], User.prototype, "updatedAt", void 0);
__decorate([
    belongsTo(() => Role),
    __metadata("design:type", Object)
], User.prototype, "role", void 0);
__decorate([
    hasMany(() => Token),
    __metadata("design:type", Object)
], User.prototype, "tokens", void 0);
__decorate([
    hasMany(() => Token, {
        onQuery: (query) => query.where('type', 'PASSWORD_RESET'),
    }),
    __metadata("design:type", Object)
], User.prototype, "passwordResetTokens", void 0);
__decorate([
    hasMany(() => Token, {
        onQuery: (query) => query.where('type', 'VERIFY_EMAIL'),
    }),
    __metadata("design:type", Object)
], User.prototype, "verifyEmailTokens", void 0);
__decorate([
    hasMany(() => Order),
    __metadata("design:type", Object)
], User.prototype, "orders", void 0);
__decorate([
    hasMany(() => Order, { foreignKey: 'deliveryManId' }),
    __metadata("design:type", Object)
], User.prototype, "deliveryOrders", void 0);
__decorate([
    computed(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], User.prototype, "fullName", null);
//# sourceMappingURL=user.js.map