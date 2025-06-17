import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Security-Policy': "script-src 'self' 'unsafe-inline' http://localhost:* https://cdn.jsdelivr.net;"
    }
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        format: 'system'
      }
    }
  },
});
