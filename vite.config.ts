import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/webhook/chatbot': {
        target: 'https://automate.dreamgen.online',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/webhook\/chatbot/, '/webhook/chatbot'),
        configure: (proxy, _options) => {
          proxy.on('error', (err) => {
            console.log('proxy error', err);
          });
          proxy.on('proxyReq', (proxyReq, req) => {
            // Ajout des headers CORS nécessaires
            proxyReq.setHeader('Content-Type', 'application/json');
            proxyReq.setHeader('Access-Control-Allow-Origin', '*');
            proxyReq.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
            proxyReq.setHeader('Access-Control-Allow-Headers', 'Content-Type');

            console.log('Sending Request:', {
              method: req.method,
              url: req.url,
              headers: proxyReq.getHeaders()
            });
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            console.log('Response:', {
              status: proxyRes.statusCode,
              url: req.url,
              headers: proxyRes.headers
            });
          });
        }
      }
    },
    headers: {
      // Headers globaux pour le serveur de développement
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  }
});
