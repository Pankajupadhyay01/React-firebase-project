/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        main: 'linear-gradient(to left bottom, #001738, #121b4b, #2d1c5a, #4b1766, #6a036c)'
      },
      colors: {
        mustard: "#fdcc0d"
      },

      keyframes: {
        test: {
          '100%': { transform: ' translateY(10px); ' }
        }
      }
    },
  },
  plugins: [],
}