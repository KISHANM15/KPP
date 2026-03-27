import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/CodeTech/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    strictPort: false,
    host: true,
  },
})
