import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import VueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  server: {
    host: "0.0.0.0"
  },
  plugins: [
    vue(),
    VueDevTools(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "pinia",
      ],
      dts:"src/auto-import.d.ts",
      eslintrc: {
        enabled: true
      },
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
});
