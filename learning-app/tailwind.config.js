/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#4f45e4',
        'dark-purple': '#4238c9',
        'gray-purple': '#c9d2fc',
      },
    },
  },
  plugins: [],
}
