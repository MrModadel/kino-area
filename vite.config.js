// vite.config.js
import {
   resolve
} from 'path'
import {
   defineConfig
} from 'vite'

export default defineConfig({
   build: {
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'index.html'),
            card: resolve(__dirname, 'pages/card/index.html'),
            actior: resolve(__dirname, 'pages/actior/index.html'),
            user: resolve(__dirname, 'pages/user/index.html')
         },
      },
   },
})