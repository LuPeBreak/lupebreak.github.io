/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cosmic: {
          // Background base — preto profundo
          bg: "#050816",
          bgLight: "#0a0e27",
          bgCard: "#0d1126",
          // Accents neon
          purple: "#7c3aed",
          cyan: "#06b6d4",
          magenta: "#ec4899",
          // Text
          white: "#e2e8f0",
          lightText: "#94a3b8",
          muted: "#64748b",
          // Borders / glows
          border: "#1e293b",
          glow: "#7c3aed",
        },
        // Manter compatibilidade com brand-* existente durante a transição
        brand: {
          background: "#050816",
          highlighted: "#7c3aed",
          whiteTitleText: "#e2e8f0",
          whiteSubtitleText: "#94a3b8",
          shadow: "#020617",
          cardBg: "#0d1126",
        },
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Space Grotesk", "sans-serif"],
      },
      animation: {
        // Hero
        focus: "focus 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "blob-float": "blob-float 8s ease-in-out infinite",
        "blob-rotate": "blob-rotate 20s linear infinite",
        // Texto
        "gradient-text": "gradient-text 4s ease infinite",
        // Glow pulsos
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "glow-purple": "glow-purple 4s ease-in-out infinite",
        // Scroll reveal
        "fade-up": "fade-up 0.6s ease-out both",
        "fade-in": "fade-in 0.8s ease-out both",
        // Marquee
        marquee: "marquee 30s linear infinite",
        // Float
        float: "float 6s ease-in-out infinite",
        // Twinkle stars
        twinkle: "twinkle 4s ease-in-out infinite",
        "twinkle-slow": "twinkle 7s ease-in-out infinite",
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
        "blob-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -30px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "blob-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "gradient-text": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(124, 58, 237, 0.3), 0 0 40px rgba(124, 58, 237, 0.1)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(124, 58, 237, 0.5), 0 0 60px rgba(124, 58, 237, 0.2)",
          },
        },
        "glow-purple": {
          "0%, 100%": { filter: "drop-shadow(2px 4px 15px #7c3aed)" },
          "50%": { filter: "drop-shadow(2px 8px 25px #7c3aed)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        "twinkle-slow": {
          "0%, 100%": { opacity: "0.1", transform: "scale(0.8)" },
          "50%": { opacity: "0.8", transform: "scale(1.1)" },
        },
      },
      backgroundImage: {
        "cosmic-gradient": "linear-gradient(135deg, #050816 0%, #0a0e27 40%, #0d1126 100%)",
        "neon-gradient": "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
        "magenta-gradient": "linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)",
      },
    },
  },
  plugins: [],
};
