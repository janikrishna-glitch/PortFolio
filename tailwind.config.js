/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {

      colors: {
        html: '#E34F26', 
      },
    },
  },
  plugins: [],
}

