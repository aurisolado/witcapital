import { Barlow, Inter } from 'next/font/google';

// ----------------------------------------------------------------------

export function remToPx(value) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value) {
  return `${value / 16}rem`;
}

export function responsiveFontSizes({ sm, md, lg }) {
  return {
    '@media (min-width:600px)': {
      fontSize: pxToRem(sm),
      lineHeight: pxToRem(sm + 8),
    },
    '@media (min-width:900px)': {
      fontSize: pxToRem(md),
      lineHeight: pxToRem(md + 8),
    },
    '@media (min-width:1200px)': {
      fontSize: pxToRem(lg),
      lineHeight: pxToRem(lg + 8),
    },
  };
}

export const primaryFont = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const secondaryFont = Barlow({
  weight: ['900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// ----------------------------------------------------------------------

// LEARN MORE
// https://nextjs.org/docs/basic-features/font-optimization#google-fonts

export const typography = {
  fontFamily: primaryFont.style.fontFamily,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1i: {
    fontWeight: 600,
    fontSize: pxToRem(42),
    //justify text

    ...responsiveFontSizes({ sm: 52, md: 68, lg: 78 }),
  },

  h1: {
    
    fontWeight: 800,
    fontSize: pxToRem(42),
    lineHeight: 1,
    ...responsiveFontSizes({ sm: 42, md: 76, lg: 63 }),
  },
  h2: {
    fontWeight: 600,
    lineHeight: 1,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 35, md: 44, lg: 45 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 33, md: 45, lg: 53 }),
  },
  h4: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 24, md: 30, lg: 30 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    textAlign: 'justify',
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 400,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    textAlign: 'justify',
  },
  body1: {
    fontWeight: 400,
    color: '#212B36',
    fontSize: 'clamp(1.125rem,calc(.58114rem + .87719vw),1.25rem)',
    lineHeight: 'clamp(1.125rem,calc(.58114rem + .87719vw),1.55rem)',
    textAlign: 'justify',
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    textAlign: 'justify',
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textAlign: 'justify',
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'unset',
  },
};
