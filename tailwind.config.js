/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      screens: {
        sm: '640px', // small screens, mobile devices
        md: '768px', // medium screens, tablets
        lg: '1024px', // large screens, laptops
        xl: '1280px', // extra-large screens, desktops
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          border: '2px solid',
          fontWeight: '600',
        },
      });
    }),
  ],
};
