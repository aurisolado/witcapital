import { Typography, Button, Box, Stack } from '@mui/material';
import HeroSlider from './HeroSlider';

const HeroContent = () => (
  <Stack spacing={3} sx={{ textAlign: 'left', maxWidth: { xs: '100%', md: 480 } }}>
    <Typography 
      variant="h1" 
    >
      Tu{' '}
      <Box component="span" sx={{ color: 'primary.main' }}>
        crecimiento
      </Box>
      <br></br>
      {' '}es nuestro{' '}
      <br></br>
      <Box component="span" sx={{ color: 'primary.main' }}>
        compromiso
      </Box>
    </Typography>
    
    <Typography 
      variant="h6" 
      sx={{ color: 'text.secondary'}}
    >
      Soluciones financieras integrales para personas y empresas.
      Regulados por la CNBV con tecnología de vanguardia.
    </Typography>
    
    <Box sx={{ pt: 1 }}>
      <Button 
        variant="contained" 
        size="large" 
        href="/business"
      >
        Agenda una cita
      </Button>
    </Box>
  </Stack>
);

export default function HeroSection() {
  const slides = [
    {
      bgColor: "#ffffff",
      imageSrc: "/assets/illustrations/HOME/HOME_01.png",
      imageAlt: "Ilustración crecimiento financiero",
      content: <HeroContent />,
      imageSide: "right"
    }
  ];

  return (
    <HeroSlider 
      slides={slides}
      height="50vh"
    />
  );
}