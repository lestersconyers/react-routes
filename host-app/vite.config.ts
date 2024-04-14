import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app",
      remotes: {
        remoteApp: "http://localhost:9000/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  preview: {
    port: 8000,
  },
  build: {
    target: 'esnext'
  }
});
