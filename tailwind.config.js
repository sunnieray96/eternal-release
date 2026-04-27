/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FCFAF7",
        ink: "#1C1C1C",
        clay: "#A8613F",
        moss: "#3E4A34",
        sand: "#D4C5A9",
      },
    },
  },
  plugins: [],
};
