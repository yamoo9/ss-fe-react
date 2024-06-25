import process from 'node:process';
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
  };
});

export default viteConfig;
