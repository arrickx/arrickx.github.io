import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/setup.js', './src/vitest.setup.js'],
    exclude: [...configDefaults.exclude, 'e2e/*'],
    css: true
  }
});
