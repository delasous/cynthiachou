module.exports = {
    purge: [],
    theme: {
      extend: {
        fontFamily: {
          'sans': ['Roboto', 'sans-serif'],
        },
        colors: {
          primary: '#f7f7f7',
          secondary: '#2a2a2a',
          blue: '#3332cc',
        },
        gridTemplateColumns: {
          'subgrid': 'subgrid'
        },
        gridTemplateRows: {
          'subgrid': 'subgrid'
        },
        gridAutoRows: {
          'xsm': 'max-content max-content 1fr max-content'
        },
        flex: {
          '2': '2 1 auto',
        },
        maxWidth: {
          '1/2': '50%',
          '3/4': '75%',
        },
        minWidth: {
         '64': '16rem'
        },
        screens: {
          'xsm': {'min': '240px', 'max': '768px'},
        },
      },
    },
    variants: {},
    plugins: [],
  }
  