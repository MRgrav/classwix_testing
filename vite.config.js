import { defineConfig } from 'vite';
import compress from 'vite-plugin-compress'; // Gzip compression plugin

export default defineConfig({
  plugins: [
    compress({
      gzip: true,          // Enable Gzip compression
      brotli: false,       // Disable Brotli compression (enable if needed)
      deleteOriginFile: false, // Keep original uncompressed files
    }),
  ],
});
