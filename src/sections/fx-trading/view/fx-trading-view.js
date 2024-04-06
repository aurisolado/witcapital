'use client';

import { useScroll } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
// layouts
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import Contact from '../contact';
import ComicSon from '../cs';

// ----------------------------------------------------------------------

export default function FxTradingView() {
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
        <ComicSon />

        <Contact />
      </Box>
    </>
  );
}
