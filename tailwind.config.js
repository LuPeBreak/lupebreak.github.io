/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          background: "#0a192f",
          highlighted: "#561BE3",
          whiteTitleText: "#ccd6f6",
          whiteSubtitleText: "#8892b0",
          shadow: "#040c16",
          cardBg:"#5418E240"
        },
      },
      animation: {
        focus: "focus 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
      keyframes: {
        focus: {
          "0%": {
            letterSpacing: "-0.5em",
            transform: "translateZ(-600px)",
            filter: "blur(12px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateZ(0)",
            filter: "blur(0px)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
