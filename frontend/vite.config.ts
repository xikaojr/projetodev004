import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@sons': path.resolve(__dirname, './src/assets/sons'),
    },
  },
})
