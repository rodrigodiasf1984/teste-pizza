module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight:{
        '680px': '680px'
      },
      colors:{
        red:{
          custom: '#d1411e'
        }
      },
      backgroundImage:{
        'pizza': "url('/assets/pizza.svg')",
      },
      screens: {
        xxs: { min: "280px", max: "319px" },
        xs: { min: "320px", max: "540px" },
      },
      fontFamily: {
        roboto: ['Roboto']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
