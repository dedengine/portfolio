/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('.', import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this repo from /portfolio/; Vercel, other hosts and dev serve from /
  base: process.env.GITHUB_ACTIONS ? '/portfolio/' : '/',
  plugins: [svelte(), tailwindcss()],
  resolve: {
    alias: {
      $lib: path.resolve(root, 'src/lib')
    }
  },
})