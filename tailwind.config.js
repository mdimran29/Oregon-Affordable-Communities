/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0b4f2c', // Dark green from logo
        secondary: '#8dc63f', // Light green from logo
        tertiary: '#33322b',
        background: '#f8f9fa',
        linen: '#f3f4f5',
        surface: '#f8f9fa',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
