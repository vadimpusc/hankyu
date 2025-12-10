// vite.config.mts
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        // Keep using the Svelte 4 style API: new App({ target })
        compatibility: {
          componentApi: 4
        }
      }
    })
  ],
  base: "/",

  server: {
    port: 5173,
    strictPort: true
  }
});
