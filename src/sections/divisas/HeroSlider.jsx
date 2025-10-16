import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import HeroSlide from './HeroSlide';

export default function HeroSlider({ 
  slides, 
  autoPlay = false, 
  autoPlayMs = 6000, 
  height = "50vh", 
  minHeight = 420, 
  maxHeight = 720 
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoPlay || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayMs);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayMs, slides.length]);

  return (
    <Box
      component="section"
      role="region"
      aria-label="Promoción principal"
      sx={{
        width: '100%',
        height,
        minHeight,
        maxHeight,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: `${slides.length * 100}%`,
          height: '100%',
          transform: `translateX(-${(currentSlide * 100) / slides.length}%)`,
          transition: slides.length > 1 ? 'transform 500ms ease' : 'none'
        }}
      >
        {slides.map((slide, index) => (
          <Box key={index} sx={{ width: `${100 / slides.length}%`, height: '100%' }}>
            <HeroSlide {...slide} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}