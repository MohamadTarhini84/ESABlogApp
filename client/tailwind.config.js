/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize:{
      'lg':'32px',
      'sxs':'10px',
      'ss':'12px'
    },
    extend: {},
    minWidth:{
      'ok':'128px',
      'okk':'15%'
    }
  },
  plugins: [],
}
