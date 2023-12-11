import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      autoInstall: true,
    }),
  ],
  transformers: [transformerVariantGroup()],
  shortcuts: {
    col: "flex flex-col",
    center: "flex justify-center items-center",
  },
});
