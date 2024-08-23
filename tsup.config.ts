import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    reset: "./src/reset.css",
    cij: "./src/cij.ts",
  },
  outDir: "tools",
  format: ["iife"],
  outExtension: ({ format }) => ({
    js: `.${format}.js`,
  }),
  globalName: "tofukit",
  target:"es5",
  minify: true,
});
