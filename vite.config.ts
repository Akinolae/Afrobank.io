import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Afrobank/",
  plugins: [react()],
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
    }
  },
  build: {
    commonjsOptions: {
      include: [/linked-dep/, /node_modules/],
    },
  },

});
