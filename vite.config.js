import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/synkerr/', // Correct repository name
  plugins: [react()]
});
