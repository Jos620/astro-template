import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
  ],
});
