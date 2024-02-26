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
    borderRadius: '25px',
    color: theme.palette.text.primary,
    transition: 'all 0.2s',
    '&:hover': {
      background: '#9fe870',
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
        background: '#9fe870',
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
      background: '#9fe870',
      color: '#163300 !important',
      '&:hover': {
        background: '#88df50',
      },
    }),

    //active green color
    ...(active &&
      color === 'green' && {
        background: '#ebebeb',
      }),
    ...(active &&
      color === 'dark' && {
        background: '#9fe870',
        color: '#163300',
      }),
    //no active dark color
    ...(active === false &&
      color === 'dark' && {
        color: '#9fe870',
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

export const ListSubItem = styled(ListItemButton, {
  shouldForwardProp: (prop) =>
    prop !== 'active' && prop !== 'open' && prop !== 'offsetTop' && prop !== 'subItem',
})(({ active, open, offsetTop, subItem, theme }) => {
  return {
    ...theme.typography.subtitle2,
    padding: '5px 10px 6px 10px',
    //add transition all 0.3s
    fontSize: '15px',
    borderRadius: '25px',
    color: theme.palette.text.primary,
    transition: 'all 0.2s',
    '&:hover': {
      background: 'transparent',
      color: '#000',
    },
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
      background: 'transparent',
      color: '#000',
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
