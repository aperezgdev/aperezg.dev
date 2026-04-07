// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  adapter: node({
	  mode: "standalone",
  }),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es",
          en: "en",
        },
      },
    }),
  ],
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
  },
  site: "https://aperezg.dev",
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Roboto",
        cssVariable: "--font-roboto",
      },
    ],
  },
});
