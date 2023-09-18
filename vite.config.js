/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcss from "./postcss.config.js";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": process.env
  },
  css: {
    postcss
  },
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => val.replace(/^~/, "")
      }
    ]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});
