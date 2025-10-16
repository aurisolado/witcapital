import Box from '@mui/material/Box';
import Hero from './Hero';
import USStep from './USStep';
import REITs from './REITs';
import TrustsUsage from './TrustsUsage';
import ServiceIntegral from './ServiceIntegral';

export default function InversionPatrimonial() {
  return (
    <Box sx={{ overflow: 'hidden', position: 'relative' }}>
      <Hero />
      <USStep />
      <REITs />
      <TrustsUsage />
      <ServiceIntegral />
    </Box>
  );
}