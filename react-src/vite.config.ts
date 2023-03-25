import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../build/renderer",
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 4000,
  },
  base: "./",
})
