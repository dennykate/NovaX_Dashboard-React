/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#082E53",
        secondary: "#FBC108",
      },
    },
  },
  plugins: [],
};
