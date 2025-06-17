import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    'process.env': '{}',
    'process': '{}',
  },
  build: {
    lib: {
      entry: 'src/main.tsx',
      formats: ['system'],
      fileName: 'admin-app',
    },
    rollupOptions: {
      external: ['single-spa'],
      output: {
        format: 'system',
        entryFileNames: 'admin-app.js',
      }
    },
    target: 'esnext',
    minify: false,
  },
  server: {
    port: 8081,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  },
  preview: {
    port: 8081,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
