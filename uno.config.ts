// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts
} from 'unocss'
import { presetScrollbar } from 'unocss-preset-scrollbar'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetScrollbar({
      scrollbarWidth: '0px'
    }),
    presetWebFonts({
    }),
  ],
  theme: {
    colors: {
      ble: '#070A17',
      bluish: {
        '100': '#000',
        '200': '#000'
      }
    }
  }
})