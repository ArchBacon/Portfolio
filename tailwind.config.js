/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {
      fontFamily: {
        'birthstone': ['Birthstone', 'cursive'],
        'raleway': ['Raleway', 'sans-serif'],
        'addison': ['Addison', 'sans-serif'],
      },
      colors: {
        'primary-text': '#F5F6F8',
        'secondary-text': '#941D2A',
        'primary': '#031212',
        'secondary': '#DB181C',
      },
    },
    backgroundImage: {
      'particles': "url(/public/images/particles.png)"
    },
  },
  plugins: [],
}

