/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'off-white': '#D9F0FF',
        'light-blue': '#BAE3FC',
        'mid-blue': '#2278B8',
        'dark-blue': '#0E3458',
        rose: '#FFCDCD',
        warning: '#d34730',
        black: '#322D2D',
      },
    },
  },
  plugins: [],
}
