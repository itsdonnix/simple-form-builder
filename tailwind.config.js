/** @type {typeof import('tailwindcss/stubs/defaultConfig.stub')} */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  experimental: {
    uniformColorPalette: true,
    extendedFontSizeScale: true,
  },
  content: ['./src/**/*.svelte', './public/*.html'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
