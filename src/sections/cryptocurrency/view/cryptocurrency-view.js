'use client';

import { useScroll } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
// layouts
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import Advantages from '../advantages';
import CryptoTable from '../cryptotable';
import Home from '../home';
import Legal from '../legal';

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
          bgcolor: '#ffffff',
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
