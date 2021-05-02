module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      flexGrow: {
        2: 2,
      },
      minHeight: {
        2: '2rem',
        3: '3rem',
        4: '4rem',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      flexGrow: ['hover'],
      outline: ['hover'],
    },
  },
  plugins: [],
};
