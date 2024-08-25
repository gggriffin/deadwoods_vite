import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


//TODO: Start with finishing static-deploy guide
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/deadwoods_vite/'
})
