'use client';

import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';
// routes
import { usePathname } from 'src/routes/hooks';
//
import Footer from './footer';
import HeaderDark from './header-dark';

// ----------------------------------------------------------------------

export default function DarkLayout({ children }) {
  const pathname = usePathname();

  const isHome = pathname === '/never';

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: 1, background: '#163300' }}>
      <HeaderDark />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ...(!isHome && {
            pt: { xs: 8, md: 10 },
          }),
        }}
      >
        {children}
      </Box>

      <Footer />
    </Box>
  );
}

DarkLayout.propTypes = {
  children: PropTypes.node,
};
