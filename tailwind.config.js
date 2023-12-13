/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  future:{
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: "var(--font-archivo)",
      inter: "var(--font-inter)",
    },
    extend: {
      colors: {
        white: "#DDDDDD",
        white_100:"#e2e2e2",
        white_200:"#F6F6F6",
        gray:"#676767",
        black_000:"#0f0f0f",
        black_100:"#1a1a1a",
        black_200: "#121212",
        black_300: "#171717",
        black_400:"#242424",
        black_overlay: "#0d0d0d/50",
        main: "#100c08",
        gold_100: "#706338",
        gold_200: "#a59564",
        beige: "#736d5c",
      },
      borderWidth: {
        thin: "0.1px",
        medium: "0.5px",
        large: "1px",
      },
      borderColor: {
        dark_gray: "#393939",
        gold_100: "#706338",
        gold_200: "#a59564",
      },
      textColor: {
        white: "#DDDDDD",
        gray: "#393939",
        gold: "#706338",
        light_gold: "#a59564",
        beige: "#736d5c",
      },
      
    },
  },
  plugins: [],
};
