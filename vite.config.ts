import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "./", // relative asset paths so the build works from any path (incl. preview)
  plugins: [react()],
});
