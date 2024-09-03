import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    reset: "./src/index.css",
  },
  outDir: "../../dist",
  format: ["iife"],
  target: "es5",
  minify: true,
});
