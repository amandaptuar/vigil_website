import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Use absolute base path for BrowserRouter
  server: {
    proxy: {
      '/api': {
        target: 'http://160-153-179-249.sslip.io',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [
    react(),
    {
      // Remove crossorigin attribute Vite injects on <script> and <link> tags.
      // On shared/FTP hosting, crossorigin triggers CORS preflight which fails
      // and silently blocks the entire JS bundle from loading (white screen).
      name: 'remove-crossorigin',
      transformIndexHtml(html) {
        return html
          .replace(/<script type="module" crossorigin/g, '<script type="module"')
          .replace(/<link rel="stylesheet" crossorigin/g, '<link rel="stylesheet"')
          .replace(/ crossorigin/g, ''); // catch any remaining crossorigin attrs
      },
    }
  ],
})
