// ----------------------------------------------------------------------

//define font faces

const WSansRegular = {
  fontFamily: 'WSans',
  src: "url(/fonts/WSans-Heavy.woff2) format('woff2')",
};

export function cssBaseline(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': [WSansRegular],

        '*': {
          boxSizing: 'border-box',
        },

        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },

        body: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
        },
        '#root, #__next': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          maxWidth: '100%',
          display: 'inline-block',
          verticalAlign: 'bottom',
        },
      },
    },
  };
}
