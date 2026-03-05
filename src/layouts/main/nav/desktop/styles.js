// @mui
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
// theme
import { paper } from 'src/theme/css';
//
import { HEADER } from '../../../config-layout';

// ----------------------------------------------------------------------

export const ListItem = styled(ListItemButton, {
  shouldForwardProp: (prop) =>
    prop !== 'active' && prop !== 'open' && prop !== 'offsetTop' && prop !== 'subItem',
})(({ active, open, color, offsetTop, subItem, theme, ...prop }) => {
  return {
    ...theme.typography.subtitle2,
    padding: '5px 10px 6px 10px',
    //add transition all 0.3s
    fontSize: '15px',
    borderRadius: '5px',
    color: theme.palette.text.primary,
    transition: 'all 0.2s',
    '&:hover': {
      background: '#C2D565',
      color: '#163300',
    },

    //if color is green, hover color is white
    ...(color === 'green' && {
      '&:hover': {
        background: '#ebebeb',
      },
    }),
    ...(color === 'dark' && {
      '&:hover': {
        background: '#C2D565',
        color: '#163300',
      },
    }),
    // Sub item
    ...(subItem && {
      ...theme.typography.body2,
      color: theme.palette.text.secondary,
    }),
    // offsetTop
    ...(offsetTop && {
      color: theme.palette.text.primary,
    }),
    // Active
    ...(active && {
      background: '#C2D565',
      color: '#163300 !important',
      '&:hover': {
        background: '#C2D565',
      },
    }),

    //active green color
    ...(active &&
      color === 'green' && {
        background: '#ebebeb',
      }),
    ...(active &&
      color === 'dark' && {
        background: '#C2D565',
        color: '#163300',
      }),
    //no active dark color
    ...(active === false &&
      color === 'dark' && {
        color: '#C2D565',
      }),
    // CTA pill button (Figma: lime green, r:40, DM Sans 16px/500, white)
    ...(color === 'cta' && {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.brand.olive,
      borderRadius: '40px',
      padding: '8px 18px',
      fontFamily: '"DM Sans", Helvetica, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: 1.15,
      '&:hover': {
        background: theme.palette.primary.light,
        color: theme.palette.brand.olive,
      },
    }),
    // Active sub item
    ...(active &&
      subItem && {
        ...theme.typography.subtitle2,
        color: theme.palette.text.primary,
      }),
    // Open
    ...(open && {
      opacity: 0.48,
    }),
  };
});

// Dropdown sub-items: DM Sans 14px/400, white on dark navy #0b0e27 (Figma exact)
export const ListSubItem = styled(ListItemButton, {
  shouldForwardProp: (prop) =>
    prop !== 'active' && prop !== 'open' && prop !== 'offsetTop' && prop !== 'subItem',
})(({ active, open, theme }) => {
  return {
    fontFamily: '"DM Sans", Helvetica, Arial, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    padding: '8px 20px',
    borderRadius: '0px',
    color: theme.palette.common.white,
    backgroundColor: theme.palette.brand.navy,
    transition: 'background 0.2s, color 0.2s',
    '&:hover': {
      background: theme.palette.primary.main,
      color: theme.palette.brand.navy,
    },
    // Active
    ...(active && {
      background: theme.palette.primary.main,
      color: theme.palette.brand.navy,
    }),
    // Open
    ...(open && {
      opacity: 0.8,
    }),
  };
});

// ----------------------------------------------------------------------

export const StyledMenu = styled(Paper)(({ theme }) => ({
  ...paper({ theme }),
  left: 0,
  right: 0,
  margin: 'auto',
  position: 'fixed',
  zIndex: theme.zIndex.modal,
  padding: theme.spacing(5, 1, 1, 3),
  maxWidth: theme.breakpoints.values.lg,
  top: HEADER.H_DESKTOP_OFFSET,
  boxShadow: theme.customShadows.dropdown,
  borderRadius: theme.shape.borderRadius * 2,
}));

// ----------------------------------------------------------------------

export const StyledSubheader = styled(ListSubheader)(({ theme }) => ({
  ...theme.typography.overline,
  padding: 0,
  fontSize: 11,
  color: theme.palette.text.primary,
}));
