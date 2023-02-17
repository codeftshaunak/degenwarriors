/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gunji: ['var(--font-gunji)'],
      },
      colors: {
        brand: {
          red: "#CC402E",
          cream: "#EBD5B8",
        }
      }
    },
  },
  plugins: [],
};