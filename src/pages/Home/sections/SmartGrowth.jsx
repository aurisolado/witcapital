import { useState, useEffect, useRef } from 'react';
import { m } from 'framer-motion';
import { Container, Grid, Box, Typography, Button, Stack } from '@mui/material';
import { MotionViewport, varFade } from 'src/components/animate';

export default function SmartGrowth() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fadeAnimation = {
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 600ms ease-out'
  };

  const contentAnimation = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
    transition: 'opacity 450ms ease-out 80ms, transform 450ms ease-out 80ms'
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: '100%',
        height: '60vh',
        minHeight: 500,
        maxHeight: 800,
        bgcolor: '#eff4d8',
        position: 'relative',
        overflow: 'hidden',
        ...fadeAnimation
      }}
    >
      {/* Background Image - Full Height Left */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: { xs: '100%', md: '50%' },
          height: '100%',
          backgroundImage: 'url(/assets/illustrations/HOME/HOME_10.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          display: { xs: 'none', md: 'block' },
          zIndex: 1
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
          />
          
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
                Crecimiento inteligente
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
                Nuestro equipo domina los marcos regulatorios de México y EE. UU., mientras nuestras plataformas seguras y automatizadas optimizan procesos, reducen costos y te brindan acompañamiento continuo para impulsar tu crecimiento.
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
                Nuestro equipo domina los marcos regulatorios de México y EE. UU., mientras nuestras plataformas seguras y automatizadas optimizan procesos, reducen costos y te brindan acompañamiento continuo para impulsar tu crecimiento.
              </Typography>
              
              <Box sx={{ pt: 1 }}>
                <Button 
                  variant="contained" 
                  size="large" 
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
                  Conócenos
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
              src="/assets/illustrations/HOME/HOME_10.png"
              alt="Crecimiento inteligente"
              sx={{
                width: '100%',
                maxWidth: 350,
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}