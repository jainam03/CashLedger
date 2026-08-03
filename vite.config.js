import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import fs from 'fs';
import path from 'path';

// Automatically create public directory and populate PWA icons if needed
const publicDir = path.resolve(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const sourceIconPath = 'C:\\Users\\hp\\.gemini\\antigravity\\brain\\d182c095-7f67-465a-9f14-9480d0dda52d\\cashledger_app_icon_1785756053241.png';
if (fs.existsSync(sourceIconPath)) {
  const iconBuffer = fs.readFileSync(sourceIconPath);
  ['pwa-192x192.png', 'pwa-512x512.png', 'apple-touch-icon.png', 'favicon.ico'].forEach((file) => {
    fs.writeFileSync(path.join(publicDir, file), iconBuffer);
  });
}

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="128" fill="#0a0e27"/>
  <rect x="96" y="160" width="320" height="220" rx="36" fill="#1e293b" stroke="#3b82f6" stroke-width="12"/>
  <circle cx="340" cy="270" r="28" fill="#22c55e"/>
</svg>`;
fs.writeFileSync(path.join(publicDir, 'masked-icon.svg'), svgContent);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg', 'pwa-192x192.png', 'pwa-512x512.png'],
      manifest: {
        name: 'CashLedger — Personal Finance & Stipend Ledger',
        short_name: 'CashLedger',
        description: 'Smart personal finance ledger with student stipend runway tracking, cash in hand balance checks, and full offline support.',
        theme_color: '#0a0e27',
        background_color: '#0a0e27',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/CashLedger/',
        scope: '/CashLedger/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        shortcuts: [
          {
            name: 'Add Transaction',
            short_name: 'Add',
            description: 'Log a new cash, bank, or UPI expense',
            url: '/CashLedger/?action=add',
            icons: [{ src: 'pwa-192x192.png', sizes: '192x192' }]
          }
        ]
      }
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          'vendor-icons': ['lucide-react']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },
  base: '/CashLedger/',
});
