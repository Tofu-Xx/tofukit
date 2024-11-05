import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    reset: './src/index.css',
  },
  minify: true,
})
