import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteApp",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteRootApp": "./src/App.tsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
  preview: {
    port: 9000,
  },
  build: {
    target: 'esnext'
  }
});
