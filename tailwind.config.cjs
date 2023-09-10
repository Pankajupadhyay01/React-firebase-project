/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        Hero: 'linear-gradient(to right top, #c6f3ea, #c4f8df, #ccfbcf, #ddfbbc, #f5f9aa)',
        main: 'linear-gradient(to left bottom, #001738, #121b4b, #2d1c5a, #4b1766, #6a036c)'
      },
      colors: {
        mustard: "#fdcc0d",
        cyan: "#c6f3ea"
      },

      keyframes: {
        Bounce: {
          '100%': { transform: ' translateY(10px); ' }
        },
        bganimate: {
          '0%': { background: 'white', color: 'black' },
          '50%,100%': { background: 'black', color: 'white' },

        }
      }
    },
  },
  plugins: [],
}