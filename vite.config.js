import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.jsx"),
      name: "sdvr-grid",
      fileName: format => `sdvr-grid.${format}.js`
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        format: "umd",
        name: "sdvrgrid",
        globals: {
          react: "React"
        }
      }
    }
  },
  plugins: [react()]
});
