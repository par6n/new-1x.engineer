const typography = require('@manishrc/tailwindcss-typography-js');

const typographyTheme = typography({
  baseFontSize: '18px',
  baseLineHeight: 1.66,
  headerFontFamily: ['Inconsolata'],
  bodyFontFamily: ['Inconsolata'],
  googleFonts: [
    {
      name: 'Inconsolata',
      styles: [
        '400',
        '700',
        '900',
      ]
    }
  ],
});

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['./src/**/*.html'],
  },
  theme: {
    extend: {
      screens: {
        'dark': {'raw': '(prefers-color-scheme: dark)'},
      }
    },
  },
  variants: {},
  plugins: [
    typographyTheme,
  ],
}
