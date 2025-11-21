import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Définir dynamiquement l'URL de base pour l'API
const API_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://portfolio-ps6h.onrender.com/api'
    : 'http://localhost:8000/api'


// https://vite.dev/config/
export default defineConfig({
  base: '/', // <<< OBLIGATOIRE, bien placé tout en haut
  root: '.',
  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    outDir: "dist",
    assetsDir: 'assets',
    manifest: true,
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
   define: {
    __API_BASE_URL__: JSON.stringify(API_BASE_URL),
  },
})

  