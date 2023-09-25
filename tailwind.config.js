/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          "red": '#FF444A',
          "dark": "#0B0B0B",
        }
      },

    },
  },
  plugins: [],
}