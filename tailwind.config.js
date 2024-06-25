/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {  
    extend: {
      fontFamily: {
        sans:["Outfit", 'sans-serif'],
        serif:["Young Serif", 'serif'],
        karla:["Karla", 'sans-serif'],
        roboto:["Roboto", 'sans-serif'],
        BeVietnamPro:["Be Vietnam Pro", 'sans-serif'],
      },
      colors: {
        'White':'hsl(0, 0%, 100%)',
        'RoseWhite': 'hsl(330, 100%, 98%)',
        'Eggshell': 'hsl(30, 54%, 90%)',
        'LightGrey': 'hsl(30, 18%, 87%)',
        'WengeBrown': 'hsl(30, 10%, 34%)',
        'DarkCharcoal': 'hsl(24, 5%, 18%)',
      },

    },
    
  },
  plugins: [
    plugin(function({ matchUtilities, theme }) {
      matchUtilities(
          {
              'bg-gradient': (angle) => ({
                  'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
              }),
          },
          {
              // values from config and defaults you wish to use most
              values: Object.assign(
                  theme('bgGradientDeg', {}), // name of config key. Must be unique
                  {
                      0: '0deg',
                      10: '10deg', // bg-gradient-10
                      15: '15deg',
                      20: '20deg',
                      25: '25deg',
                      30: '30deg',
                      45: '45deg',
                      60: '60deg',
                      90: '90deg',
                      120: '120deg',
                      135: '135deg',
                  }
              )
          }
       )
    })
  ],
}

