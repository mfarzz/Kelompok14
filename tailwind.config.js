/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '/views/**/*.{ejs,js}',
    'node_modules/preline/dist/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('daisyui'),
  ],
}

