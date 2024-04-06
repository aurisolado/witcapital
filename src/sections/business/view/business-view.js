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
import LaborAdvice from '../labor-advice';
import Home from '../home';
import Legal from '../legal';
import BankingFinance from '../banking-finance';
import ForeignTrade from '../foreign-trade';
import TaxConsulting from '../tax-consulting';
import InternationalConsulting from '../international-consulting';
import Contact from '../contact';

// ----------------------------------------------------------------------

export default function BusinessView() {
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

        <TaxConsulting />
        <BankingFinance />
        <ForeignTrade />
        <InternationalConsulting />

        {/* <LaborAdvice /> */}

        <Contact />
      </Box>
    </>
  );
}
