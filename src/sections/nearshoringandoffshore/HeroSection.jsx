import { Typography, Button, Box, Stack } from '@mui/material';
import HeroSlider from './HeroSlider';

const HeroContent = () => (
  <Stack spacing={3} sx={{ textAlign: 'left', maxWidth: { xs: '100%', md: 480 } }}>
    <Typography 
      variant="h1" 
      sx={{ 
        fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
        fontWeight: 700,
        lineHeight: 1.1,
        letterSpacing: '-0.02em'
      }}
    >
      Nearshore & Offshore
    </Typography>
    
    <Typography 
      variant="h6" 
      sx={{ 
        color: 'text.secondary',
        fontWeight: 400,
        lineHeight: 1.6,
        maxWidth: 420
      }}
    >
      El mercado de divisas o Forex (Foreign Exchange) es el mercado financiero más grande y líquido del mundo, operando las 24 horas del día.
    </Typography>

    <Typography 
      variant="h6" 
      sx={{ 
        color: 'text.secondary',
        fontWeight: 400,
        lineHeight: 1.6,
        maxWidth: 420
      }}
    >
      Aquí se negocian diferentes monedas con un volumen diario que supera los billones de dólares, ofreciendo oportunidades de rentabilidad a corto, mediano y largo plazo
    </Typography>
    
    
  </Stack>
);

export default function HeroSection() {
  const slides = [
    {
      bgColor: "#eff4d8",
      imageSrc: "/assets/illustrations/E_NEARSHORE_OFFSHORE/01.png",
      imageAlt: "Ilustración crecimiento financiero",
      content: <HeroContent />,
      imageSide: "right"
    }
  ];

  return (
    <HeroSlider 
      slides={slides}
      height="60vh"
      minHeight={500}
      maxHeight={800}
    />
  );
}