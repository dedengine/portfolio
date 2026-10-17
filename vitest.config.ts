import { defineConfig } from 'vitest/config'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  resolve: {
    conditions: ['browser'],
    alias: {
      $lib: path.resolve(root, 'src/lib')
    }
  },
  plugins: [svelte(), tailwindcss()],
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.{ts,js}'],
    exclude: ['node_modules', 'dist'],
    setupFiles: ['./tests/setup.ts']
  }
})