import process from 'node:process';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const viteConfig = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.BASE_URL ?? '/',
    plugins: [react()],
    server: {
      port: 3000,
    },
    css: {
      devSourcemap: true,
    },
    envPrefix: 'EUID_',
    define: {
      __IMGBB_API_KEY__: JSON.stringify(env.IMGBB_API_KEY),
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/setup.js',
    },
  };
});

export default viteConfig;
