/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      "dark-blue": "hsl(240, 38%, 20%)",
      "grayish-blue": "hsl(240, 18%, 77%)"
    },
    screens:{
      mobile: "375px",
      laptop: "1440px"
    },
    extend: {
      fontFamily:{
        "inter": ['Inter', 'sans-serif']
      },
      fontWeight:{
        light: 300,
        medium: 500,
        bold: 700
      }
    },
  },
  plugins: [],
}

