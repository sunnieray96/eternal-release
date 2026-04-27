module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FCFAF7",
        ink: "#1C1C1C",
        clay: "#A8613F",
        moss: "#3E4A34",
        sand: "#D9D2C5",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
