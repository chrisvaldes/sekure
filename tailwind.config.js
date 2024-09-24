/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors : {
        green : {
          deep :  '#285246',
          color : "#2CE5B1",
          clean : '#B9FFC4',
        }
      },
      fontSize : {
        45 : "45px"
      },
      fontWeight : {
        700 : 700,

      },
      fontFamily : {
        inter: ['Inter', 'sans-serif'], // Ajoutez la police Inter
        satoshi: ['Satoshi', 'sans-serif'],
      }, 
    },
  },
  plugins: [],
}

