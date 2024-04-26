import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    sourcemap: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@style': path.resolve(__dirname, 'src/styles/'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  test: {
    css: false,
    include: ['src/**/__tests__/*'],
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    clearMocks: true,
  },
});
