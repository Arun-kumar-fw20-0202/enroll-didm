/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}", //
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", //
    "./components/**/*.{js,ts,jsx,tsx,mdx}", //
    "./core/**/*.{js,ts,jsx,tsx,mdx}", //
    "./app/**/*.{js,ts,jsx,tsx,mdx}", //
    "./node_modules/flowbite/**/*.js", //
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./pages/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      // => @media (min-width: 640px) { ... }
      // => @media (min-width: 1280px) { ... }
      base: "200px",
      small: "560px",
      medium: "768px",
      large: "1024px",
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("tailwind-scrollbar"),
    require("tailwindcss-animated"),
  ],
});
