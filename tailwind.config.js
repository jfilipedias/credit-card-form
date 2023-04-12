/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans Pro, sans-serif'],
      },
      backgroundImage: {
        'card-back': "url('./src/assets/credit-card-back.png')",
        'card-front': "url('./src/assets/credit-card-front.png')",
      },
    },
  },
  plugins: [],
}
