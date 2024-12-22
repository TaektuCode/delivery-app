/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules", "!./dist"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "deep-green": "rgb(47, 106, 75)", // Adding Deep Green color
      },
    },
  },
  plugins: [],
};
