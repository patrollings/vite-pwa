import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import mkcert from 'vite-plugin-mkcert';
// https://vitejs.dev/config/

export default defineConfig({
  base: '/',
  server: {
    https: true,
  },
  build: {
    sourcemap: true,
    assetsDir: "code",
  },
  plugins: [
    react(),
    mkcert(),
    VitePWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: 'dist/sw.js',
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,json, png}',
        ],
      },
      injectRegister: false,
      manifest: false,
      devOptions: {
        enabled: true
      }
    }),
  ]
});
