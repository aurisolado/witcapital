import { useState, useEffect, useRef } from 'react';
import { Container, Grid, Box, Typography, Button, Stack } from '@mui/material';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const slideAnimation = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
    transition: 'opacity 600ms ease-out, transform 600ms ease-out'
  };

  const imageAnimation = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1) translateY(0px)' : 'scale(0.95) translateY(30px)',
    transition: 'opacity 700ms ease-out 150ms, transform 700ms ease-out 150ms'
  };

  const contentAnimation = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
    transition: 'opacity 450ms ease-out 80ms, transform 450ms ease-out 80ms'
  };

  return (
    <Box
      component="section"
      role="region"
      aria-label="Private Trust Hero"
      ref={heroRef}
      sx={{
        width: '100%',
        height: '60vh',
        minHeight: 500,
        maxHeight: 800,
        bgcolor: '#eff4d8',
        position: 'relative',
        overflow: 'hidden',
        ...slideAnimation
      }}
    >
      {/* Background Image - Full Height */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: { xs: '100%', md: '50%' },
          height: '100%',
          backgroundImage: 'url(/assets/illustrations/P_MERDADO_DE_DIVISAS/HERO.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          display: { xs: 'none', md: 'block' },
          zIndex: 1,
          ...imageAnimation
        }}
      />
      
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: { xs: 6, sm: 8, md: 10 }, 
          px: { xs: 3, sm: 4 },
          height: '100%',
          position: 'relative',
          zIndex: 2
        }}
      >
        <Grid 
          container 
          alignItems="center" 
          spacing={{ xs: 4, md: 0 }}
          sx={{ height: '100%', minHeight: 'inherit' }}
        >
          <Grid 
            item 
            xs={12} 
            md={6} 
            sx={{
              display: 'flex',
              alignItems: 'center',
              minHeight: { xs: 'auto', md: '100%' }
            }}
          >
            <Stack spacing={3} sx={{ textAlign: 'left', maxWidth: { xs: '100%', md: 480 }, ...contentAnimation }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em'
                }}
              >
                Trading de Divisas
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
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  maxWidth: 420
                }}
              >
                Aquí se negocian diferentes monedas con un volumen diario que supera los billones de dólares, ofreciendo oportunidades de rentabilidad a corto, mediano y largo plazo
              </Typography>

              <Box sx={{ pt: 1 }}>
                <Button
                  variant="contained"
                  size="large"
                  href="/business"
                  sx={{
                    py: 1.5,
                    px: 4,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    textTransform: 'none',
                    boxShadow: 3,
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Contáctanos
                </Button>
              </Box>
            </Stack>
          </Grid>
          
          {/* Mobile Image */}
          <Grid 
            item 
            xs={12} 
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              alignItems: 'center',
              py: 2
            }}
          >
            <Box
              component="img"
              src="/assets/illustrations/P_MERDADO_DE_DIVISAS/HERO.png"
              alt="Personas sosteniendo piezas de rompecabezas con la palabra TRUST"
              sx={{
                width: '100%',
                maxWidth: 350,
                height: 'auto',
                objectFit: 'contain',
                ...imageAnimation
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}