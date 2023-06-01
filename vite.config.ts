import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
// https://vitejs.dev/config/

const manifestForPWA: Partial<VitePWAOptions> = {
  registerType: 'prompt',
  includeAssets: ['favicon.svg'],
  manifest: {
    name: 'Horizon Planning',
    short_name: 'HOP',
    description: 'Horizon Planning',
    icons: [
      {
        src: './public/favicon.svg',
        sizes: '225x225',
        type: 'image/svg',
        purpose: 'any maskable',
      },
    ],
    theme_color: '#171717',
    background_color: '#e8ebf2',
    display: 'standalone',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
  }
};

export default defineConfig({
  plugins: [
    react(),
    VitePWA({ 
      registerType: 'autoUpdate', 
      devOptions: { enabled: true },
      includeAssets: ['favicon.svg'],
      injectRegister: "inline",
      manifest: {
        name: "Horizon Planning",
        short_name: 'HOP',
        description: 'Horizon Planning',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icons/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
    }),
  ]
});
