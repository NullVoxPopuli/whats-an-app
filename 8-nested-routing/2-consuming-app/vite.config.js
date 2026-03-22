import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    // react
    reactRouter(),
  ],
  ssr: false,
});
