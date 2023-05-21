import {
  defineConfig,
  presetWebFonts,
  presetUno,
  presetIcons,
  transformerVariantGroup,
} from "unocss";
import { presetHeroPatterns } from "@julr/unocss-preset-heropatterns";
import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: "Amulya",
      },
    }),
    presetIcons(),
    presetHeroPatterns(),
  ],
  theme: {
    colors: {
      color: "#051124",
      altColor: "#f5f5f5",
      primary: "#a1b865",
      secondary: "#f8ddd8",
      accent: "#b8bee0",
    },
  },
  extractors: [extractorSvelte()],
  transformers: [transformerVariantGroup()],
});
