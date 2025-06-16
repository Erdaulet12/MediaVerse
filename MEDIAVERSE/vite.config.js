import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/encyclopedia": {
        target: "https://cdn.animenewsnetwork.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\//, "/"),
      },
    },
  },
});
