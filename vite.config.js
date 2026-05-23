import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './', // Ensures relative paths for assets in index.html
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
    },
    {
      name: 'replace-public-paths',
      enforce: 'post',
      generateBundle(options, bundle) {
        for (const fileName in bundle) {
          const chunk = bundle[fileName];
          // Rewrite paths in JS chunks
          if (chunk.type === 'chunk' && chunk.code) {
            chunk.code = chunk.code.replace(/(["'`(])\/myimg\//g, '$1./myimg/');
            chunk.code = chunk.code.replace(/(["'`(])\/assets\//g, '$1./assets/');
          }
          // Rewrite paths in CSS assets
          if (chunk.type === 'asset' && typeof chunk.source === 'string' && fileName.endsWith('.css')) {
            chunk.source = chunk.source.replace(/url\(\/myimg\//g, 'url(../myimg/');
            chunk.source = chunk.source.replace(/url\("\/myimg\//g, 'url("../myimg/');
            chunk.source = chunk.source.replace(/url\('\/myimg\//g, "url('../myimg/");
            chunk.source = chunk.source.replace(/url\(\/assets\//g, 'url(../assets/');
            chunk.source = chunk.source.replace(/url\("\/assets\//g, 'url("../assets/');
            chunk.source = chunk.source.replace(/url\('\/assets\//g, "url('../assets/");
          }
        }
      }
    }
  ],
})

