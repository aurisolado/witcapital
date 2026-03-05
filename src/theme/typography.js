import { Inter, DM_Sans } from 'next/font/google';

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

// Inter — body text, labels, card descriptions
export const primaryFont = Inter({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// DM Sans — headings h1/h2, CTA button text (Figma spec)
export const secondaryFont = DM_Sans({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// ----------------------------------------------------------------------

export const typography = {
  fontFamily: primaryFont.style.fontFamily,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,

  // H1: DM Sans 63px / 900 Black — hero page title (Figma exact)
  h1: {
    fontFamily: secondaryFont.style.fontFamily,
    fontWeight: 900,
    fontSize: pxToRem(40),
    lineHeight: 1.08,
    ...responsiveFontSizes({ sm: 48, md: 56, lg: 63 }),
  },

  // H2: DM Sans 40px / 700 Bold — section titles (Figma exact)
  h2: {
    fontFamily: secondaryFont.style.fontFamily,
    fontWeight: 700,
    lineHeight: 1.075,
    fontSize: pxToRem(30),
    ...responsiveFontSizes({ sm: 34, md: 38, lg: 40 }),
  },

  // H3: Inter 40px / 900 — standalone large section headers (e.g. "Fundamentos de nuestra cultura")
  h3: {
    fontFamily: primaryFont.style.fontFamily,
    fontWeight: 900,
    lineHeight: 1.15,
    fontSize: pxToRem(26),
    ...responsiveFontSizes({ sm: 30, md: 36, lg: 40 }),
  },

  // H4: Inter 28px / 600 — card section titles (e.g. "Análisis Exhaustivo")
  h4: {
    fontFamily: primaryFont.style.fontFamily,
    fontWeight: 600,
    lineHeight: 1.3,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 22, md: 26, lg: 28 }),
  },

  // H5: Inter 21px / 600 — section labels "Persona" / "Empresa" (Figma exact)
  h5: {
    fontFamily: primaryFont.style.fontFamily,
    fontWeight: 600,
    lineHeight: 1.19,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 19, md: 21, lg: 21 }),
  },

  h6: {
    fontFamily: primaryFont.style.fontFamily,
    fontWeight: 400,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },

  subtitle1: {
    fontFamily: primaryFont.style.fontFamily,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },

  subtitle2: {
    fontFamily: primaryFont.style.fontFamily,
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },

  // body1: Inter 16px / 400 — body text (Figma exact)
  body1: {
    fontFamily: primaryFont.style.fontFamily,
    fontWeight: 400,
    color: '#1a202c',
    fontSize: pxToRem(16),
    lineHeight: 1.75,
  },

  body2: {
    fontFamily: primaryFont.style.fontFamily,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },

  caption: {
    fontFamily: primaryFont.style.fontFamily,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },

  overline: {
    fontFamily: primaryFont.style.fontFamily,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },

  // button: DM Sans 16px / 900 — CTA buttons (Figma exact)
  button: {
    fontFamily: secondaryFont.style.fontFamily,
    fontWeight: 900,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
    textTransform: 'unset',
  },
};
