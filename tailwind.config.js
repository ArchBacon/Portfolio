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
    },
  },
  plugins: [],
}

