/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    keyframes: {
      "fade-in": {
        "0%": { opacity: "0", transform: "translateY(10px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
    },
    animation: {
      "fade-in": "fade-in 0.6s ease-out forwards",
    },
    colors: {
      background: "#F9FAFB",
      primary: "#1E3A8A",
      secondary: "#3B82F6",
      textPrimary: "#374151",
      textSecondary: "#6B7280",
      white: "#FFFFFF",
      softWhite: "#F3F4F6",
      black: "#000000",
      graySide: "#E5E7EB",
      cardsGray: "#4b5563",
      lightBlue: "#E0E7FF",
      red: "#DC2626",
    },
  },
  plugins: [],
};
