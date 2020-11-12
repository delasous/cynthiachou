module.exports = {
    purge: [],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Roboto', 'sans-serif'],
        },
        colors: {
          primary: '#f7f7f7',
          secondary: '#ff1313',
          blue: '#3332cc',
        },
        gridAutoRows: {
          'xsm': 'max-content max-content 1fr max-content'
        },
        flex: {
          '2': '2 1 auto',
        },
        width: {
          '72': '20rem'
        },
        maxWidth: {
          '1/2': '50%',
          '2/3': '60%',
          '3/4': '75%',
          '56': '14rem',
          '64': '16rem',
          '72': '20rem',
          '104': '26rem',
          '112': '28rem',
        },
        minWidth: {
         '16': '4rem',
         '32': '8rem',
         '40': '10rem',
         '48': '12rem',
         '64': '16rem'
        },
        screens: {
          'xsm': {'min': '240px', 'max': '768px'},
        },
      },
    },
    variants: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      textDecoration: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    plugins: [],
  }
  