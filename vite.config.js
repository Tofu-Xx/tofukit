import { defineConfig } from "vite";
import { resolve } from "path";
import csso from "postcss-csso";

export default defineConfig({
  base: "/",
  css: {
    postcss: {
      plugins: [
        csso(), // 压缩 CSS
      ],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: "tofukit",
      fileName: (format) => `main.${format}.js`,
      formats: ["es"]
    }
  },
});