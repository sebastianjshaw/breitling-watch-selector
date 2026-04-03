import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Actions sets VITE_BASE_PATH from actions/configure-pages (e.g. /repo-name).
// Local dev: default matches the project Pages URL.
function viteBase(): string {
  const raw = process.env.VITE_BASE_PATH
  if (raw === undefined || raw === '') {
    return '/breitling-watch-selector/'
  }
  const trimmed = raw.replace(/^\/+|\/+$/g, '')
  if (trimmed === '') return '/'
  return `/${trimmed}/`
}

export default defineConfig({
  base: viteBase(),
  plugins: [react()],
})
