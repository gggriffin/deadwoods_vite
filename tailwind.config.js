// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   heme: {
//     colors: {
//       green: {
//         primary: "#5EFC8D",
//       },
//       blue: {
//         primary: "#47e0ff",
//       },
//       white: "#FFFFFF",
//       black: "#141414",
//       trueBlack: "#000000",
//     },
//     container: {
//       center: true,
//     },
//     extend: {
//       fontFamily: {
//         "header-text": ["Spartan", "sans-serif"],
//         "main-content-text": ["Montserrat", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        primary: "#5EFC8D",
      },
      blue: {
        primary: "#47e0ff",
      },
      white: "#FFFFFF",
      black: "#141414",
      trueBlack: "#000000",
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "header-text": ["Spartan", "sans-serif"],
        "main-content-text": ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
