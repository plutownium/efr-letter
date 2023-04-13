/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'off-white': '#EAF7FF',
        'light-blue': '#E6F6FF',
        'mid-blue': '#2278B8',
        'dark-blue': '#0E3458',
        green: '#23B31B',
        rose: '#FFCDCD',
        warning: '#d34730',
        black: '#322D2D',
        yellow: '#FFFFCF',
      },
    },
  },
  plugins: [],
}
