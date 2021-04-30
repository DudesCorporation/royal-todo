module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {},
    extend: {
      flexGrow: {
        2: 2,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      flexGrow: ['hover'],
    },
  },
  plugins: [],
};
