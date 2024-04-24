import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/"),
      "@assets": resolve(__dirname, "./src/assets/"),
      "@components": resolve(__dirname, "./src/components/"),
      "@contexts": resolve(__dirname, "./src/contexts/"),
      "@hooks": resolve(__dirname, "./src/hooks/"),
      "@i18n": resolve(__dirname, "./src/i18n/"),
      "@models": resolve(__dirname, "./src/models/"),
      "@pages": resolve(__dirname, "./src/pages/"),
      "@redux": resolve(__dirname, "./src/redux/"),
      "@services": resolve(__dirname, "./src/services/"),
      "@theme": resolve(__dirname, "./src/theme/"),
    }
  }
})
