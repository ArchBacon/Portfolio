/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cardo': ['cardo', 'serif'],
      },
      backgroundImage: {
        'characters': "url(/public/images/character_mashup.png)"
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch', // add required value here
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

