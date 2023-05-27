/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-board-black': '#B7C0D8',
        'color-board-white': '#E8EDF9',
        'color-dark-blue': '#34364C',
      },
    },
  },
  plugins: [],
}
