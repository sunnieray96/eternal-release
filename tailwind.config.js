/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#FDFBF7",
        primary: "#334155",
        secondary: "#78716C",
        accent: "#C67B5C",
        sage: "#8B9E7E",
        "sage-dark": "#6B7F5E",
        sand: "#D4C5A9",
        terracotta: "#A8613F",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
