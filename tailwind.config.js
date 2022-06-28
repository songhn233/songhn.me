/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-mode="halloween"]'],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
};
