import { resolve } from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
    "@assets": resolve(__dirname, "/assets"),
  },
  css: ["@assets/main.scss"],
});
