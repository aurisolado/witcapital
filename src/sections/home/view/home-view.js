'use client';

import { useScroll } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
// layouts
import MainLayout from 'src/layouts/main';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import Home from 'src/pages/Home';
import GreenLayout from 'src/layouts/main/layout-green';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { scrollYProgress } = useScroll();

  return (
    <GreenLayout>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Box
        sx={{
          overflow: 'hidden',
          position: 'relative',
          bgcolor: 'background.default',
        }}
      >
        <Home />
      </Box>
    </GreenLayout>
  );
}
