/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ejs,js}',
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

