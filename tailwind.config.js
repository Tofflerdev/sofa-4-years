/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: '#FF6B6B',
        sunset: '#FFA07A',
        golden: '#FFD700',
        tropical: '#2ECC71',
        ocean: '#00CED1',
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'cursive'],
      },
    },
  },
  plugins: [],
}
