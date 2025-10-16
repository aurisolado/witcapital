import { useState, useEffect, useRef } from 'react';
import { Box, Container, Grid } from '@mui/material';

export default function HeroSlide({ 
  bgColor = "#eff4d8", 
  imageSrc, 
  imageAlt = "Ilustración crecimiento financiero", 
  content, 
  imageSide = "right"
}) {
  const [isVisible, setIsVisible] = useState(false);
  const slideRef = useRef(null);

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

    if (slideRef.current) {
      observer.observe(slideRef.current);
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
      ref={slideRef}
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: bgColor,
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
          right: imageSide === 'right' ? 0 : 'auto',
          left: imageSide === 'left' ? 0 : 'auto',
          width: { xs: '100%', md: '50%' },
          height: '100%',
          backgroundImage: `url(${imageSrc})`,
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
            <Box sx={{ width: '100%', ...contentAnimation }}>
              {content}
            </Box>
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
              src={imageSrc}
              alt={imageAlt}
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