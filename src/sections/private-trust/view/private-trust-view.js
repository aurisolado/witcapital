'use client';

import { useScroll } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import PrivateTrust from '../index';
import Contact from '../contact';

// ----------------------------------------------------------------------

export default function PrivateTrustView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <PrivateTrust />
      </Box>
    </>
  );
}
