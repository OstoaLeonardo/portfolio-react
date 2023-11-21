import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_SPOTIFY_CLIENT_ID': JSON.stringify(process.env.VITE_SPOTIFY_CLIENT_ID),
    'process.env.VITE_SPOTIFY_SECRET_ID': JSON.stringify(process.env.VITE_SPOTIFY_SECRET_ID),
    'process.env.VITE_SPOTIFY_REFRESH_TOKEN': JSON.stringify(process.env.VITE_SPOTIFY_REFRESH_TOKEN),
    'process.env.VITE_OPEN_WEATHER_API_KEY': JSON.stringify(process.env.VITE_OPEN_WEATHER_API_KEY),
    'process.env.VITE_GITHUB_TOKEN': JSON.stringify(process.env.VITE_OPEN_WEATHER_CITY_ID),
  },
})
