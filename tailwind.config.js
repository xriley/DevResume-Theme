/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#54B689",
        secondary: "#292929",
        body: "#4F4F4F",
        light: "#FAFAFA",
        divider: "#EAEAEA",
      },
    },
  },
  plugins: [],
}
