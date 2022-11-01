/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#0a192f",
          highlighted:"#561BE3",
          whiteTitleText:"#ccd6f6",
          whiteSubtitleText:"#8892b0"

        },
      },
    },
  },
  plugins: [],
};
