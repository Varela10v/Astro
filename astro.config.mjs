
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tu-sitio.netlify.app',
  vite: {
    plugins: [tailwindcss()]
  }
});