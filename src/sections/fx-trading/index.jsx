import Box from '@mui/material/Box';
import Hero from './Hero';
import Beneficios from './Beneficios';
import Asesores from './Asesores';
import Compromiso from './Compromiso';
import ServiceIntegral from './ServiceIntegral';

export default function FxTrading() {
  return (
    <Box sx={{ overflow: 'hidden', position: 'relative' }}>
      <Hero />
      <Beneficios />
      <Asesores />
      <Compromiso />
      <ServiceIntegral />
    </Box>
  );
}