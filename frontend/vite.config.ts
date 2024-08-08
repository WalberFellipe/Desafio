import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [sveltekit(), nodePolyfills()],
  optimizeDeps: {
    include: ['whatwg-fetch'],
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    }
  },
  ssr: {
    noExternal: ['@neoconfetti/svelte', 'whatwg-fetch'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
