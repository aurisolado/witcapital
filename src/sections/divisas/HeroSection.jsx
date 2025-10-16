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
      Divisas & Stablecoins
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
      En Wit Biz ofrecemos soluciones en divisas y stablecoins para optimizar costos, agilizar pagos internacionales y fortalecer la estabilidad financiera en un entorno global competitivo
    </Typography>

  </Stack>
);

export default function HeroSection() {
  const slides = [
    {
      bgColor: "#eff4d8",
      imageSrc: "/assets/illustrations/E_DIVISAS_STABLECOINS_01/01.png",
      imageAlt: "Divisas & Stablecoins",
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