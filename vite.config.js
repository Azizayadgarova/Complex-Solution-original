import { defineConfig } from 'vite';
import crypto from 'crypto-browserify';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
    'global': {},
  },
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
    },
  },
});
