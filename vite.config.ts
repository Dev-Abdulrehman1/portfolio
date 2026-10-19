import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Absolute asset paths: on a deep link such as /work/voice-engine a relative
  // "./assets/x.js" resolves to /work/assets/x.js, which the SPA rewrite answers
  // with index.html and the browser refuses to execute as a module.
  base: "/",
  plugins: [react()],
});
