import { defineConfig } from "vite";
import { extensions, ember } from "@embroider/vite";
import { babel } from "@rollup/plugin-babel";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";

export default defineConfig({
  resolve: {
    extensions: [...extensions, ".jsx", ".tsx"],
  },
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
      generatedRouteTree: "src/routeTree.gen.tsx",
    }),
    react(),
    ember(),
    babel({
      babelHelpers: "runtime",
      extensions,
    }),
  ],
});
