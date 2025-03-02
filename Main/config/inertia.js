import useBranding from '#services/use_branding';
import { defineConfig } from '@adonisjs/inertia';
const inertiaConfig = defineConfig({
    rootView: 'inertia_layout',
    sharedData: {
        branding: async () => {
            return await useBranding();
        },
        errors: (ctx) => ctx.session?.flashMessages.get('errors'),
        auth: async (ctx) => {
            if (await ctx.auth.check()) {
                const user = ctx.auth.user;
                await user?.load('role');
                return {
                    id: user?.id,
                    fullName: user?.fullName,
                    firstName: user?.firstName,
                    lastName: user?.lastName,
                    email: user?.email,
                    phoneNumber: user?.phoneNumber,
                    address: user?.address,
                    roleId: user?.roleId,
                    role: user?.$preloaded?.role,
                    isSuspended: Boolean(user?.isSuspended),
                    isVerified: Boolean(user?.isEmailVerified),
                    notificationSound: Boolean(user?.notificationSound),
                };
            }
            return null;
        },
    },
    ssr: {
        enabled: false,
        entrypoint: 'inertia/app/ssr.tsx',
    },
});
export default inertiaConfig;
//# sourceMappingURL=inertia.js.map