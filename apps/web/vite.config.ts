import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { nodePolyfills } from "vite-plugin-node-polyfills"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), nodePolyfills()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/lib": path.resolve(__dirname, "src/lib"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/styles": path.resolve(__dirname, "src/styles"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      buffer: "buffer",
    },
  },
  define: {
    global: {},
  },
  envDir: path.resolve(__dirname),
  assetsInclude: ["**/*.md"],
})
