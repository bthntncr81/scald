// vite.config.ts
import { defineConfig } from "file:///Users/omerbatuhantuncer/Documents/GitHub/PharmacyAdmin/scald/node_modules/vite/dist/node/index.js";
import { getDirname } from "file:///Users/omerbatuhantuncer/Documents/GitHub/PharmacyAdmin/scald/node_modules/@adonisjs/core/build/src/helpers/main.js";
import inertia from "file:///Users/omerbatuhantuncer/Documents/GitHub/PharmacyAdmin/scald/node_modules/@adonisjs/inertia/build/src/plugins/vite.js";
import react from "file:///Users/omerbatuhantuncer/Documents/GitHub/PharmacyAdmin/scald/node_modules/@vitejs/plugin-react/dist/index.mjs";
import adonisjs from "file:///Users/omerbatuhantuncer/Documents/GitHub/PharmacyAdmin/scald/node_modules/@adonisjs/vite/build/src/client/main.js";
import tailwindcss from "file:///Users/omerbatuhantuncer/Documents/GitHub/PharmacyAdmin/scald/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/omerbatuhantuncer/Documents/GitHub/PharmacyAdmin/scald/node_modules/autoprefixer/lib/autoprefixer.js";
import tsconfigPaths from "file:///Users/omerbatuhantuncer/Documents/GitHub/PharmacyAdmin/scald/node_modules/vite-tsconfig-paths/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///Users/omerbatuhantuncer/Documents/GitHub/PharmacyAdmin/scald/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    inertia({ ssr: { enabled: false } }),
    react(),
    adonisjs({
      entrypoints: ["inertia/app/app.tsx", "inertia/scss/app.scss"],
      reload: ["resources/views/**/*.edge"]
    }),
    tsconfigPaths()
  ],
  server: {
    hmr: process.env.NODE_ENV === "development",
    watch: {
      usePolling: true
    }
  },
  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      "~/": `${getDirname(__vite_injected_original_import_meta_url)}/inertia/`
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    },
    preprocessorOptions: {
      scss: {
        api: "modern"
        // or "modern"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvb21lcmJhdHVoYW50dW5jZXIvRG9jdW1lbnRzL0dpdEh1Yi9QaGFybWFjeUFkbWluL3NjYWxkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvb21lcmJhdHVoYW50dW5jZXIvRG9jdW1lbnRzL0dpdEh1Yi9QaGFybWFjeUFkbWluL3NjYWxkL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9vbWVyYmF0dWhhbnR1bmNlci9Eb2N1bWVudHMvR2l0SHViL1BoYXJtYWN5QWRtaW4vc2NhbGQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHsgZ2V0RGlybmFtZSB9IGZyb20gJ0BhZG9uaXNqcy9jb3JlL2hlbHBlcnMnO1xyXG5pbXBvcnQgaW5lcnRpYSBmcm9tICdAYWRvbmlzanMvaW5lcnRpYS9jbGllbnQnO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xyXG5pbXBvcnQgYWRvbmlzanMgZnJvbSAnQGFkb25pc2pzL3ZpdGUvY2xpZW50JztcclxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ3RhaWx3aW5kY3NzJztcclxuaW1wb3J0IGF1dG9wcmVmaXhlciBmcm9tICdhdXRvcHJlZml4ZXInO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgaW5lcnRpYSh7IHNzcjogeyBlbmFibGVkOiBmYWxzZSB9IH0pLFxyXG4gICAgcmVhY3QoKSxcclxuICAgIGFkb25pc2pzKHtcclxuICAgICAgZW50cnlwb2ludHM6IFsnaW5lcnRpYS9hcHAvYXBwLnRzeCcsICdpbmVydGlhL3Njc3MvYXBwLnNjc3MnXSxcclxuICAgICAgcmVsb2FkOiBbJ3Jlc291cmNlcy92aWV3cy8qKi8qLmVkZ2UnXSxcclxuICAgIH0pLFxyXG4gICAgdHNjb25maWdQYXRocygpLFxyXG4gIF0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBobXI6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgdXNlUG9sbGluZzogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvKipcclxuICAgKiBEZWZpbmUgYWxpYXNlcyBmb3IgaW1wb3J0aW5nIG1vZHVsZXMgZnJvbVxyXG4gICAqIHlvdXIgZnJvbnRlbmQgY29kZVxyXG4gICAqL1xyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICd+Lyc6IGAke2dldERpcm5hbWUoaW1wb3J0Lm1ldGEudXJsKX0vaW5lcnRpYS9gLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3MsIGF1dG9wcmVmaXhlcl0sXHJcbiAgICB9LFxyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICBzY3NzOiB7XHJcbiAgICAgICAgYXBpOiAnbW9kZXJuJywgLy8gb3IgXCJtb2Rlcm5cIlxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VyxTQUFTLG9CQUFvQjtBQUN0WSxTQUFTLGtCQUFrQjtBQUMzQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sY0FBYztBQUNyQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLG1CQUFtQjtBQVB3TSxJQUFNLDJDQUEyQztBQVNuUixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsTUFBTSxFQUFFLENBQUM7QUFBQSxJQUNuQyxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUCxhQUFhLENBQUMsdUJBQXVCLHVCQUF1QjtBQUFBLE1BQzVELFFBQVEsQ0FBQywyQkFBMkI7QUFBQSxJQUN0QyxDQUFDO0FBQUEsSUFDRCxjQUFjO0FBQUEsRUFDaEI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLEtBQUssUUFBUSxJQUFJLGFBQWE7QUFBQSxJQUM5QixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsTUFBTSxHQUFHLFdBQVcsd0NBQWUsQ0FBQztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLGFBQWEsWUFBWTtBQUFBLElBQ3JDO0FBQUEsSUFDQSxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixLQUFLO0FBQUE7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
