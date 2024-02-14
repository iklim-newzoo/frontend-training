import { configDefaults } from 'vitest/config';

/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest-setup.ts'],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        ...configDefaults.exclude,
        'src/mocks',
        'src/main.tsx',
        'src/testUtils.tsx',
        'src/types.ts',
        'src/*.d.ts',
        'src/**/*.stories.ts',
        'src/**/*.stories.tsx',
      ],
    },
  },
});
