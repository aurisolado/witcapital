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
      En Wit Biz, te ofrecemos un servicio integral para la compra y venta de divisas y stablecoins, ayudándote a diversificar tus activos de manera segura y con respaldo regulatorio. 
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
      Nuestro compromiso es guiarte en cada paso, brindando transparencia y cumpliendo con la normativa vigente, de modo que tomes decisiones informadas y fortalezcas tu patrimonio
    </Typography>
    
    
  </Stack>
);

export default function HeroSection() {
  const slides = [
    {
      bgColor: "#eff4d8",
      imageSrc: "/assets/illustrations/P_DIVISAS_STABLECOINS/HERO.png",
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