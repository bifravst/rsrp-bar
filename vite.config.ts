import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	base: `${(process.env.BASE_URL ?? '').replace(/\/+$/, '')}/`,
	server: {
		host: 'localhost',
		port: 8080,
		open: '/dev/index.html',
	},
})
