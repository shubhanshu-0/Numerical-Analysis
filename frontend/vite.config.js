import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import dotenv from 'dotenv';
dotenv.config();

//https://vite.dev/config/
export default defineConfig({
  server : {
    proxy : {
      '/api' : {
        target : "https://numerical-analysis.onrender.com" ,
        changeOrigin: true
      }
    } ,
  } ,
  plugins: [react()],
})
