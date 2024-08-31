import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    cij: "./src/index.ts",
  },
  outDir: "../../tools",
  format: ["iife", "esm"],
  outExtension: ({ format }) => ({
    js: `.${format}.js`,
  }),
  globalName: "tofukit",
  target: "es5",
  minify: true,
});
