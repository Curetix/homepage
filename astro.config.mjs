// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Outfit",
        cssVariable: "--font-outfit",
      },
    ],
    responsiveImages: true,
  },
  build: {
    inlineStylesheets: "always",
  },
});
