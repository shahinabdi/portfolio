import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/shahinabdi.github.io/' : '/',
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
    }),
  ],
})
