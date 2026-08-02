import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion'],
          'icons': ['lucide-react', 'react-icons/si', 'react-icons/fa'],
          'lenis': ['@studio-freight/lenis'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['framer-motion', 'lucide-react', '@studio-freight/lenis'],
  },
});
