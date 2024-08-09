import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    lib: {
      entry: "src/main.js",
      name: "tofukit",
      fileName: (format) => `main.${format}.js`
    }
  }
});