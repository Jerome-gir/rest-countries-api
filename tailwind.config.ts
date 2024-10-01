import {nextui} from '@nextui-org/theme';
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(209, 23%, 22%)",
        "very-dark-blue": {
          DEFAULT: "hsl(207, 26%, 17%)",
          text: "hsl(200, 15%, 8%)",
        },
        "dark-gray": "hsl(0, 0%, 52%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        "nunito-sans": ["Nunito Sans", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        semibold: 600,
        extrabold: 800,
      },
    },
  },
  plugins: [nextui()],
}
