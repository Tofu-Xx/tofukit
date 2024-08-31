import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    reset: "./src/index.css",
  },
  outDir: "../../tools",
  format: ["iife"],
  // outExtension: ({ format }) => ({
  //   js: `.${format}.js`,
  // }),
  // globalName: "tofukit",
  target:"es5",
  minify: true,
});
