/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        morandi: {
          bg: '#E6E2DD',
          primary: '#B6B3AE',
          secondary: '#C9C0B7',
          accent1: '#A39E9B',
          accent2: '#D4B8AA',
          accent3: '#8F9E9D',
          accent4: '#C2B4AB',
          text: '#4A4A4A',
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
      },
    },
  },
  plugins: [],
};