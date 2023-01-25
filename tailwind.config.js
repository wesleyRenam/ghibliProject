/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Lexend Deca, sans-serif'
    },
    colors: {
      'white': '#ffffff',
      'navyblue': '#05445E',
      'bluegrotto': '#189AB4',
      'bluegreen': '#75E6DA',
      'babyblue': '#58B7EE',
      'ghibliblue': '#109ceb',
      'gray': '#E2E8F0',
      'red': {
        500: '#ef4444',
      },
      'hoverBlue': '#0D77B5',
    },
    maxWidth: {
      'xs': '24rem',
      '2xs': '18rem',
      '3xs': '14rem',
      '4xs': '12rem',
      'xl': '50rem',
      '2xl': '100rem'
    },
    extend: {},
  },
  plugins: [],
}
