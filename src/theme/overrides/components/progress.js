import { alpha } from '@mui/material/styles';
import { linearProgressClasses } from '@mui/material/LinearProgress';

// ----------------------------------------------------------------------

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];

// ----------------------------------------------------------------------

export function progress(theme) {
  const rootStyles = (ownerState) => {
    const bufferVariant = ownerState.variant === 'buffer';

    const defaultStyle = {
      borderRadius: 1,
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 1,
      },
      ...(bufferVariant && {
        backgroundColor: 'transparent',
      }),
    };

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        backgroundColor: alpha(theme.palette[color].main, 0.24),
      }),
    }));

    return [defaultStyle, ...colorStyle];
  };

  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ ownerState }) => rootStyles(ownerState),
      },
    },
  };
}
