module.exports = {
  purge: [
    'index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#f5f5f5'
        },
        yellow: {
          500: '#ef7d1b'
        }
      }
    },
    fontFamily: {
      sans: 'Karla'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
