import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // <-- 1. Importe o 'path' do Node.js

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 2. Adicione esta seção 'resolve' para configurar o atalho
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})