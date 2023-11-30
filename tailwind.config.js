/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
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
        white:"#DDDDDD",
        black: "#0D0D0D",
        black_overlay: "#0d0d0d/50",
        light_black: "#171717",
        dark_black:"#121212",
        main:"#100c08",
        light_gold: "#a59564",
        beige:"#736d5c",
        gold: "#706338",
   
      },
      borderWidth: {
        thin: "0.1px",
        medium: "0.5px",
        large: "1px",
      },
      borderColor: {
        dark_gray: "#393939",
      },
      textColor: {
        white: "#DDDDDD",
        gray: "#393939",
        gold: "#706338",
        light_gold: "#a59564",
        beige:"#736d5c",
      },
    
    },
  },
  plugins: [],
};
