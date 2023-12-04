import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svg from 'vite-plugin-svgr';
import ViteSvgPlugin from 'vite-plugin-svgr';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteSvgPlugin(), svg()],
  base: '/ecosolution'
})
