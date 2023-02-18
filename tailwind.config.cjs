/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A446A",
        secondary: "#22223B",
      },
      fontFamily: {
        "noto-sans": ["Noto Sans"],
      },
    },
  },
  plugins: [],
};
