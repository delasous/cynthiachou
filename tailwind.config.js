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
        gridAutoRows: {
          'xsm': 'max-content max-content 1fr max-content'
        },
        flex: {
          '2': '2 1 auto',
        },
        height: {
          '150': '150px',
          '110': '110px',
        },
        maxWidth: {
          '1/2': '50%',
          '3/4': '75%',
        },
        screens: {
          'xsm': {'min': '240px', 'max': '768px'},
        },
      },
    },
    variants: {},
    plugins: [],
  }
  