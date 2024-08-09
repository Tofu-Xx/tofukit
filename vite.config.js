import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: "tofukit",
      fileName: (format) => `main.${format}.js`,
      formats: ["es"]
    }
  },
});