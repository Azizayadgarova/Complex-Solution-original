// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // <-- production uchun bu TÖG'RI, agar root domain bo'lsa
  build: {
    outDir: 'dist',
  },
})
