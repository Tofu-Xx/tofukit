import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    reset: './src/index.css',
  },
  format: ['iife'],
  target: 'es5',
  minify: true,
})
