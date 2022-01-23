module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#003F63",
        yellow: "#F2B138",
      },
      fontFamily: {
        Futura: ["Futura", "sans-serif"],
        Helvetica: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
