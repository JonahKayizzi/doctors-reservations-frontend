/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
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
