'use client';

import { useScroll } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
// layouts
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import CashPassport from '../cash-passport';
import Contact from '../contact';
import Home from '../home';
import EquityInvestment from '../equity-investment';
import PrivateTrust from '../private-trust';
import HeroSection from '../HeroSection';
import Explorar from '../Explorar';
import Stablecoins from '../Stablecoins';
import Aliado from '../Aliado';
import Usage from '../Usage';

// ----------------------------------------------------------------------

export default function CashPassportView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: '#9fe870',
        }}
      >
        <HeroSection />
        <Explorar />
        <Stablecoins />
        <Aliado />
        <Usage />
        
      </Box>
    </>
  );
}
