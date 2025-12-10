// vite.config.mts
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  base: "/hankyu/",
  plugins: [
    svelte({
      compilerOptions: {
        compatibility: {
          componentApi: 4
        }
      }
    })
  ]
});
