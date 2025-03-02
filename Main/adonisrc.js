import { defineConfig } from '@adonisjs/core/app';
export default defineConfig({
    commands: [
        () => import('@adonisjs/core/commands'),
        () => import('@adonisjs/lucid/commands'),
        () => import('@jrmc/adonis-attachment/commands'),
        () => import('adonis-lucid-filter/commands'),
        () => import('@adonisjs/mail/commands'),
    ],
    providers: [
        () => import('@adonisjs/core/providers/app_provider'),
        () => import('@adonisjs/core/providers/hash_provider'),
        {
            file: () => import('@adonisjs/core/providers/repl_provider'),
            environment: ['repl', 'test'],
        },
        () => import('@adonisjs/core/providers/vinejs_provider'),
        () => import('@adonisjs/core/providers/edge_provider'),
        () => import('@adonisjs/session/session_provider'),
        () => import('@adonisjs/vite/vite_provider'),
        () => import('@adonisjs/shield/shield_provider'),
        () => import('@adonisjs/static/static_provider'),
        () => import('@adonisjs/cors/cors_provider'),
        () => import('@adonisjs/lucid/database_provider'),
        () => import('@adonisjs/auth/auth_provider'),
        () => import('@adonisjs/inertia/inertia_provider'),
        () => import('@adonisjs/drive/drive_provider'),
        () => import('@jrmc/adonis-attachment/attachment_provider'),
        () => import('adonis-lucid-filter/provider'),
        () => import('@adonisjs/transmit/transmit_provider'),
        () => import('@adonisjs/mail/mail_provider'),
    ],
    preloads: [
        () => import('#start/routes'),
        () => import('#start/kernel'),
        () => import('#start/view'),
    ],
    tests: {
        suites: [
            {
                files: ['tests/unit/**/*.spec(.ts|.js)'],
                name: 'unit',
                timeout: 2000,
            },
            {
                files: ['tests/functional/**/*.spec(.ts|.js)'],
                name: 'functional',
                timeout: 30000,
            },
        ],
        forceExit: false,
    },
    metaFiles: [
        {
            pattern: 'resources/views/**/*.edge',
            reloadServer: false,
        },
        {
            pattern: 'public/**',
            reloadServer: false,
        },
    ],
    assetsBundler: false,
    hooks: {
        onBuildStarting: [() => import('@adonisjs/vite/build_hook')],
    },
});
//# sourceMappingURL=adonisrc.js.map