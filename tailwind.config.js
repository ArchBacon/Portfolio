/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      fontFamily: {
        'roboto-condensed': ['Roboto Condensed', 'sand-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      colors: {
        'primary-text': '#ffffff',
        'primary': '#111',
        'secondary': '#1a1a1a',
        'tertiary': '#fdc500',
        'quaternary': '#c7511e',
      },
    },
  },
  plugins: [],
}

