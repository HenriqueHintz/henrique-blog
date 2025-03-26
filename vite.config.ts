import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['/src/main.tsx'],
      input: 'index.html'
    },
    sourcemap: true,
    minify: 'esbuild'
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react', 'react-dom', 'react-router-dom']
  },
  server: {
    port: 3000,
    host: true,
    open: true
  },
});
