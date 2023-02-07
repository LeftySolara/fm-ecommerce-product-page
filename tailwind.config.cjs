/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "sm": "375px",
      "md": "640px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      orange: "hsl(26, 100%, 55%)",
      paleOrange: "hsl(25, 100%, 94%)",

      blue: {
        100: "hsl(223, 64%, 98%)",
        200: "hsl(220, 14%, 75%)",
        300: "hsl(219, 9%, 45%)",
        400: "hsl(220, 13%, 13%)",
      },
    },
    fontFamily: "16px",
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
