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
      maxHeight: {
        'screen-30': '30vh',
        'screen-40': '40vh',
        'screen-50': '50vh',
        'screen-60': '60vh',
        'screen-70': '70vh',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      flexGrow: ['hover'],
      outline: ['hover'],
      maxHeight: ['hover'],
    },
  },
  plugins: [],
};
