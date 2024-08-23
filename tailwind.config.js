import { themeColors } from "./src/styles/theme/colors.ts";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: themeColors.primary[500],
        alt: themeColors.secondary[500],
        accent: themeColors.tertiary[500],
        ...themeColors,
      },
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
