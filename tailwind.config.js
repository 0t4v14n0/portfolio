/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#00ff00',
        'dark-bg': '#0a0a0a',
      }
    },
  },
  plugins: [],
}