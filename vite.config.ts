import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     "@assets": resolve(__dirname, "./src/assets/"),
  //     "@components": resolve(__dirname, "./src/components/"),
  //     "@pages": resolve(__dirname, "./src/pages/"),
  //     "@services": resolve(__dirname, "./src/services/"),
  //     "@styles-engine": resolve(__dirname, "./src/styles-engine/"),
  //     "@forms-engine": resolve(__dirname, "./src/forms-engine/"),
  //     "@models": resolve(__dirname, "./src/models/"),
  //   }
  // }
})
