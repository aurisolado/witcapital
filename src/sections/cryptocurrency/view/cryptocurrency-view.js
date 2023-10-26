'use client';

import { useScroll } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
// layouts
import MainLayout from 'src/layouts/main';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import Home from '../home';
import Advantages from '../advantages';
import DarkLayout from 'src/layouts/main/layout-dark';
import CryptoTable from '../cryptotable';
import Legal from '../legal';

// ----------------------------------------------------------------------

const StyledPolygon = styled('div')(({ anchor = 'top', theme }) => ({
  left: 0,
  zIndex: 9,
  height: 80,
  width: '100%',
  position: 'absolute',
  clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)',
  backgroundColor: theme.palette.background.default,
  display: 'block',
  lineHeight: 0,
  ...(anchor === 'top' && {
    top: -1,
    transform: 'scale(-1, -1)',
  }),
  ...(anchor === 'bottom' && {
    bottom: -1,
    backgroundColor: theme.palette.grey[900],
  }),
}));

// ----------------------------------------------------------------------

export default function CryptocurrencyView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.dark',
        }}
      >
        <Home />
        <CryptoTable />
        <Advantages />
        <Legal />
      </Box>
    </>
  );
}
