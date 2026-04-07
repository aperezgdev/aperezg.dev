// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: node({
		mode: 'standalone',
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
  fonts: [{
	provider: fontProviders.fontsource(),
	name: "Roboto",
	cssVariable: "--font-roboto",
  }],
  i18n: {
    defaultLocale: "es",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  site: "https://aperezg.dev",
});
