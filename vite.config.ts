import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, './src/assets/images'),
      '@scss': path.resolve(__dirname, './src/scss'),
    },
  },
});
