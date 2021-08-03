module.exports = {
  purge: [`./index.html`, `./src/**/*.vue,js,ts,jsx,tsx}`],
   darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
    top: {
      "1/2": "50%",
    },
    left: {
      "1/2": "50%",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
