import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Subpath for GitHub Pages project site: https://<user>.github.io/breitling-watch-selector/
export default defineConfig({
  base: '/breitling-watch-selector/',
  plugins: [react()],
})
