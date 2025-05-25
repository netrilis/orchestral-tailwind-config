const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ['OrchestralSans', ...defaultTheme.fontFamily.sans]
    },
    letterSpacing: { ...defaultTheme.letterSpacing },
    lineHeight: {
      ...defaultTheme.lineHeight,
      wide: 'normal',
      sm: 'var(--od-ref-typeface-lineheight-sm)',
      md: 'var(--od-ref-typeface-lineheight-md)',
      lg: 'var(--od-ref-typeface-lineheight-lg)',
      xl: 'var(--od-ref-typeface-lineheight-xl)',
      '2xl': 'var(--od-ref-typeface-lineheight-2xl)',
      '3xl': 'var(--od-ref-typeface-lineheight-3xl)',
      '4xl': 'var(--od-ref-typeface-lineheight-4xl)',
      '5xl': 'var(--od-ref-typeface-lineheight-5xl)'
    },
    fontWeight: {
      ...defaultTheme.fontWeight,
      inherit: 'inherit',
      'light': 'var(--od-ref-typeface-weight-light)',
      'regular': 'var(--od-ref-typeface-weight-regular)',
      'medium': 'var(--od-ref-typeface-weight-medium)',
      'semibold': 'var(--od-ref-typeface-weight-semibold)',
      'bold': 'var(--od-ref-typeface-weight-bold)'
    },
    fontSize: {
      'tiny': 'var(--od-ref-typeface-size-tiny)',
      'xs': 'var(--od-ref-typeface-size-xs)',
      'sm': 'var(--od-ref-typeface-size-sm)',
      'md': 'var(--od-ref-typeface-size-md)',
      'lg': 'var(--od-ref-typeface-size-lg)',
      'xl': 'var(--od-ref-typeface-size-xl)',
      '2xl': 'var(--od-ref-typeface-size-2xl)',
      '3xl': 'var(--od-ref-typeface-size-3xl)',
      '4xl': 'var(--od-ref-typeface-size-4xl)',
      '5xl': 'var(--od-ref-typeface-size-5xl)',
      '6xl': 'var(--od-ref-typeface-size-6xl)',
      '7xl': 'var(--od-ref-typeface-size-7xl)',
    },
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      base: {
        black: 'var(--od-ref-color-base-black)',
        white: 'var(--od-ref-color-base-white)'
      },
      gray: {
        0: 'var(--od-ref-color-gray-0)',
        5: 'var(--od-ref-color-gray-5)',
        10: 'var(--od-ref-color-gray-10)',
        15: 'var(--od-ref-color-gray-15)',
        20: 'var(--od-ref-color-gray-20)',
        25: 'var(--od-ref-color-gray-25)',
        30: 'var(--od-ref-color-gray-30)',
        35: 'var(--od-ref-color-gray-35)',
        40: 'var(--od-ref-color-gray-40)',
        50: 'var(--od-ref-color-gray-50)',
        60: 'var(--od-ref-color-gray-60)',
        65: 'var(--od-ref-color-gray-65)',
        70: 'var(--od-ref-color-gray-70)',
        75: 'var(--od-ref-color-gray-75)',
        80: 'var(--od-ref-color-gray-80)',
        85: 'var(--od-ref-color-gray-85)',
        90: 'var(--od-ref-color-gray-90)',
        95: 'var(--od-ref-color-gray-95)',
        100: 'var(--od-ref-color-gray-100)',
      },
      red: {
        10: 'var(--od-ref-color-red-10)',
        20: 'var(--od-ref-color-red-20)',
        30: 'var(--od-ref-color-red-30)',
        40: 'var(--od-ref-color-red-40)',
        50: 'var(--od-ref-color-red-50)',
        60: 'var(--od-ref-color-red-60)',
        70: 'var(--od-ref-color-red-70)',
        80: 'var(--od-ref-color-red-80)',
        90: 'var(--od-ref-color-red-90)',
        100: 'var(--od-ref-color-red-100)'
      },
      green: {
        10: 'var(--od-ref-color-green-10)',
        20: 'var(--od-ref-color-green-20)',
        30: 'var(--od-ref-color-green-30)',
        40: 'var(--od-ref-color-green-40)',
        50: 'var(--od-ref-color-green-50)',
        60: 'var(--od-ref-color-green-60)',
        70: 'var(--od-ref-color-green-70)',
        80: 'var(--od-ref-color-green-80)',
        90: 'var(--od-ref-color-green-90)',
        100: 'var(--od-ref-color-green-100)'
      },
      blue: {
        10: 'var(--od-ref-color-blue-10)',
        20: 'var(--od-ref-color-blue-20)',
        30: 'var(--od-ref-color-blue-30)',
        40: 'var(--od-ref-color-blue-40)',
        50: 'var(--od-ref-color-blue-50)',
        60: 'var(--od-ref-color-blue-60)',
        70: 'var(--od-ref-color-blue-70)',
        80: 'var(--od-ref-color-blue-80)',
        90: 'var(--od-ref-color-blue-90)',
        100: 'var(--od-ref-color-blue-100)'
      },
      lightblue: {
        10: 'var(--od-ref-color-lightblue-10)',
        20: 'var(--od-ref-color-lightblue-20)',
        30: 'var(--od-ref-color-lightblue-30)',
        40: 'var(--od-ref-color-lightblue-40)',
        50: 'var(--od-ref-color-lightblue-50)',
        60: 'var(--od-ref-color-lightblue-60)',
        70: 'var(--od-ref-color-lightblue-70)',
        80: 'var(--od-ref-color-lightblue-80)',
        90: 'var(--od-ref-color-lightblue-90)',
        100: 'var(--od-ref-color-lightblue-100)'
      },
      yellow: {
        10: 'var(--od-ref-color-yellow-10)',
        20: 'var(--od-ref-color-yellow-20)',
        30: 'var(--od-ref-color-yellow-30)',
        40: 'var(--od-ref-color-yellow-40)',
        50: 'var(--od-ref-color-yellow-50)',
        60: 'var(--od-ref-color-yellow-60)',
        70: 'var(--od-ref-color-yellow-70)',
        80: 'var(--od-ref-color-yellow-80)',
        90: 'var(--od-ref-color-yellow-90)',
        100: 'var(--od-ref-color-yellow-100)'
      },
      orange: {
        10: 'var(--od-ref-color-orange-10)',
        20: 'var(--od-ref-color-orange-20)',
        30: 'var(--od-ref-color-orange-30)',
        40: 'var(--od-ref-color-orange-40)',
        50: 'var(--od-ref-color-orange-50)',
        60: 'var(--od-ref-color-orange-60)',
        70: 'var(--od-ref-color-orange-70)',
        80: 'var(--od-ref-color-orange-80)',
        90: 'var(--od-ref-color-orange-90)',
        100: 'var(--od-ref-color-orange-100)'
      },
      purple: {
        10: 'var(--od-ref-color-purple-10)',
        20: 'var(--od-ref-color-purple-20)',
        30: 'var(--od-ref-color-purple-30)',
        40: 'var(--od-ref-color-purple-40)',
        50: 'var(--od-ref-color-purple-50)',
        60: 'var(--od-ref-color-purple-60)',
        70: 'var(--od-ref-color-purple-70)',
        80: 'var(--od-ref-color-purple-80)',
        90: 'var(--od-ref-color-purple-90)',
        100: 'var(--od-ref-color-purple-100)'
      },
      magenta: {
        10: 'var(--od-ref-color-magenta-10)',
        20: 'var(--od-ref-color-magenta-20)',
        30: 'var(--od-ref-color-magenta-30)',
        40: 'var(--od-ref-color-magenta-40)',
        50: 'var(--od-ref-color-magenta-50)',
        60: 'var(--od-ref-color-magenta-60)',
        70: 'var(--od-ref-color-magenta-70)',
        80: 'var(--od-ref-color-magenta-80)',
        90: 'var(--od-ref-color-magenta-90)',
        100: 'var(--od-ref-color-magenta-100)'
      }
    },
    opacity: { ...defaultTheme.opacity }
  }
}
