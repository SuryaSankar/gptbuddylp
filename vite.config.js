import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';

export default defineConfig({
  base: '/',
  plugins: [
    nunjucks({
        templatesDir: './',
    }),
  ],
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: './src/index.html',       // Entry point for index.html
        privacy: './src/privacy.html', // Entry point for privacy.html
      },
    },
    outDir: '../dist',
    emptyOutDir: true,
  },
  publicDir: '../public',
});