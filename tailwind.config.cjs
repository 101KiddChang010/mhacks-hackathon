/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1A446A",
        secondary: "#22223B",
        background: "#F8F3F1",
        "chatbox-dark": "#4A4E69",
        "chatbox-light": "#5A6088",
      },
      fontFamily: {
        "noto-sans": ["Noto Sans"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
