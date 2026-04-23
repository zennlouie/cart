/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        surface: {
          950: '#09090f',
          900: '#11111b',
          800: '#1a1b2e',
        },
        secondary: {
          200: '#a5f3fc',
        },
      },
    },
  },
  plugins: [],
};
