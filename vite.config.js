import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr()
  ],
  //mean: set area has '~' replace to '/src'
  resolve: {
    alias: [
      { find: '~', replacement: '/src' }
    ]
  }

})
