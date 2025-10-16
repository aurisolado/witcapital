import Box from '@mui/material/Box';
import HeroSection from './sections/HeroSection';
import ServicesIntro from './sections/ServicesIntro';
import PersonaServices from './sections/PersonaServices';
import EmpresaServices from './sections/EmpresaServices';
import SmartGrowth from './sections/SmartGrowth';
import FooterNav from './sections/FooterNav';

export default function Home() {
  return (
    <Box sx={{ overflow: 'hidden', position: 'relative' }}>
      <HeroSection />
      <ServicesIntro />
      <PersonaServices />
      <EmpresaServices />
      <SmartGrowth />
    </Box>
  );
}