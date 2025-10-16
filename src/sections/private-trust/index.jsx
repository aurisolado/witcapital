import Box from '@mui/material/Box';
import Hero from './Hero';
import Roles from './Roles';
import Benefits from './Benefits';
import TaxOptimization from './TaxOptimization';

export default function PrivateTrust() {
  return (
    <Box sx={{ overflow: 'hidden', position: 'relative' }}>
      <Hero />
      <Roles />
      <Benefits />
      <TaxOptimization />
    </Box>
  );
}