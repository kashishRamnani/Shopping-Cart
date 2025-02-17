import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'redux', 'react-redux'], // This will create a separate chunk for these libraries
        },
      },
    },
  },
  base: "/shopping-cart", // Your desired base path for deployment
})
