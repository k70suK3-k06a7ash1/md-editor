import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), tsconfigPaths()],
	base: "/md-editor/",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
