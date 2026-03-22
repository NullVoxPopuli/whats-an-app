import { defineConfig } from "vite";
import { extensions, ember } from "@embroider/vite";
import { babel } from "@rollup/plugin-babel";

export default defineConfig(({ command }) => ({
  ...(command === "build"
    ? {
        build: {
          lib: {
            entry: "./app.gjs",
            name: "embeddable-app",
          },
          rolldownOptions: {
            input: "./app.gjs",
          },
        },
      }
    : {}),
  plugins: [
    ember(),
    babel({
      babelHelpers: "runtime",
      extensions,
    }),
  ],
}));
