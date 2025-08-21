// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración mínima para desarrollo con React y HMR.
export default defineConfig({
  plugins: [react()]
})