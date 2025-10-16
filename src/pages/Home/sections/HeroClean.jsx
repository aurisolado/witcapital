import { useState, useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';

export default function HeroClean() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

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

  const fadeAnimation = {
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 600ms ease-out'
  };

  return (
    <Box
      component="section"
      role="region"
      aria-label="Promoción principal"
      ref={heroRef}
      sx={{
        width: '100%',
        height: '50vh',
        minHeight: 420,
        bgcolor: '#eff4d8',
        display: 'flex',
        alignItems: 'center',
        ...fadeAnimation
      }}
    >
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Grid container alignItems="center" sx={{ height: '100%' }}>
          <Grid item xs={12} md={7.2}>
            <Box sx={{ pr: { md: 4 } }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  textWrap: 'balance',
                  mb: 3
                }}
              >
                Tu{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  crecimiento
                </Box>
                {' '}es nuestro{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  compromiso
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  maxWidth: '46ch',
                  lineHeight: 1.6,
                  color: 'text.secondary',
                  fontSize: '1.125rem',
                  mb: 4
                }}
              >
                Soluciones financieras integrales para personas y empresas.
                Regulados por la CNBV con tecnología de vanguardia.
              </Typography>

              <Button
                variant="contained"
                size="large"
                href="/business"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 999,
                  textTransform: 'none'
                }}
              >
                Agenda una cita
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={4.8}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: { xs: 300, md: '100%' },
                mt: { xs: 4, md: 0 }
              }}
            >
              <Box
                component="img"
                src="/assets/illustrations/HOME/HOME_01.png"
                alt="Ilustración crecimiento financiero"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  maxWidth: { xs: 350, md: '100%' }
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}