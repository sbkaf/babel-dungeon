import { webxdcViteConfigNoLegacy } from "@webxdc/vite-plugins";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(
  webxdcViteConfigNoLegacy({
    plugins: [preact()],
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
        "@sfx": path.resolve(__dirname, "./sfx"),
      },
    },
  }),
);
