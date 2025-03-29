import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [react()],
	server: {
		open: true
	},
	optimizeDeps: {
		include: [
			"antd/es/input",
			"antd/es/input-number",
			"antd/es/input",
			"antd/es/modal",
			"antd/es/date-picker",
			"antd/es/table",
			"antd/es/image",
			"antd/es/flex",
			"antd/es/space"
		]
	},
	resolve: {
		alias: {
			"@": "/src"
		}
	},
	build: {
		target: "esnext"
	}
})
