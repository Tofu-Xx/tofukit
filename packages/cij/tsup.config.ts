import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    cij: './src/index.ts',
  },
  format: ['iife', 'esm'],
  outExtension: ({ format }) => ({
    js: `.${format}.js`,
  }),
  globalName: 'cij',
  target: 'es5',
  minify: true,
})
