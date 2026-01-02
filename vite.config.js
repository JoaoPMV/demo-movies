import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/demo-movies/", // Caminho para o GitHub Pages
  plugins: [react()],
});
