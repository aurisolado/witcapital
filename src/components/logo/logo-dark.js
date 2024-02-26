import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// routes
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const LogoDark = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 140,
        height: 60,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="50 0 400 90"
        style={{ fill: '#9fe870' }}
        {...other}
      >
        <path d="M64 48v45h198V3H64v45zm43.2-8.3 4.4 13.8 4.2-12.5c2.3-6.9 4.6-13.1 5.1-13.8.5-.8 2.2-1.2 4.6-1l3.8.3 3.6 11.5c2.1 6.4 4.1 12.5 4.5 13.5.6 1.5 1.9-1.4 5.2-11.8l4.5-13.7h3.9c2.6 0 4 .5 4 1.2s-2.7 9.4-5.9 19.3l-5.8 18-4.9.3-4.9.3-3.4-10.3c-5.6-17.3-4.8-17-9.5-2.8l-4.3 12.5-5 .3-5 .3-6.1-18.9C96.8 35.8 94 27 94 26.6c0-.3 2-.6 4.4-.6h4.5l4.3 13.7zm75.6 6L183 65h-9V25.9l4.3.3 4.2.3.3 19.2zM233 30v4h-12v31h-9V34.1l-6.2-.3c-5.7-.3-6.3-.5-6.6-2.6-.7-5.1-.4-5.2 17.3-5.2H233v4zM286.8 30.6c-.5.4-.8 10.6-.8 22.6V75h13.1c7.3 0 14.9-.5 17.1-1.2 8.5-2.5 11.7-12.2 6.2-18.7-1.4-1.7-3.2-3.1-4.1-3.1-.9 0 0-1.3 2.1-3.4 2.8-2.6 3.6-4.1 3.6-6.8 0-4-3.2-8.1-7.7-9.9-3.3-1.4-28.5-2.5-29.5-1.3zm23.3 9.4c2.1 1.2 2.5 5 .7 6.8-.7.7-3.8 1.2-7 1.2H298v-9h5.1c2.8 0 5.9.5 7 1zm2.6 19.7c1.3 1.9 1.2 2.4-.6 4.2-1.7 1.7-3.4 2.1-8.1 2.1h-6v-9.1l6.6.3c5.5.3 6.9.7 8.1 2.5zM345.5 31c-.3.5-.5 10.6-.4 22.5l.1 21.5H357V30h-5.4c-3 0-5.8.4-6.1 1zM378 35v4.9l10.9.3 10.9.3L388.4 54C378.3 65.9 377 67.9 377 71.2V75h39v-9h-11.5c-6.3 0-11.5-.2-11.5-.5 0-.2 5.2-6.6 11.5-14.2 10.3-12.2 11.5-14 11.5-17.5V30h-38v5z" />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

LogoDark.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default LogoDark;
