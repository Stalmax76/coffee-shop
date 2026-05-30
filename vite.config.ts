import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
   plugins: [react()],
   base: './',
   resolve: {
      alias: {
         '@img': path.resolve(__dirname, './src/assets/images'),
         '@styles': path.resolve(__dirname, './src/styles'),
         '@components': path.resolve(__dirname, './src/components'),
         '@data': path.resolve(__dirname, './src/data'),
         '@typesLocal': path.resolve(__dirname, './src/types'),
      },
   },
});
