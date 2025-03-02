import BusinessSetup from '#models/business_setup';
export default class MaintenanceMiddleware {
    async handle(ctx, next) {
        const businessSetup = await BusinessSetup.firstOrFail();
        if (businessSetup.maintenanceMode) {
            return ctx.response.redirect('/under-maintenance');
        }
        return next();
    }
}
//# sourceMappingURL=maintenance_middleware.js.map