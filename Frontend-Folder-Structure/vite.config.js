import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@page': '/src/page',
      '@mui/styled-engine': '@mui/styled-engine-sc',
    }
  },
  plugins: [react()],
})
