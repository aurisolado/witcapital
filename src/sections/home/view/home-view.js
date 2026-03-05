'use client';

// @mui
import Box from '@mui/material/Box';
//
import Home from 'src/pages/Home';
import GreenLayout from 'src/layouts/main/layout-green';

// ----------------------------------------------------------------------

export default function HomeView() {
  return (
    <GreenLayout>
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
