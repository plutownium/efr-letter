/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'off-white': '#D9F0FF',
        'light-blue': '#5693ba',
        'mid-blue': '#2278b8',
        'dark-blue': '#0e3458',
        warning: '#d34730',
        'dark-grey': '#494c4e',
        'mid-grey': '#6d6767',
        'off-black': '#322d2d',
      },
    },
  },
  plugins: [],
}
