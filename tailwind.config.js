/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0F',
        surface: '#0D0D14',
        'surface-light': '#1A1A1F',
      },
    },
  },
  plugins: [],
};