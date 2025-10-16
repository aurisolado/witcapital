import { m } from 'framer-motion';
import { Container, Grid, Box, Typography } from '@mui/material';
import { MotionViewport, varFade } from 'src/components/animate';

const services = [
  {
    title: 'Pagos nacionales',
    image: '/assets/illustrations/HOME/HOME_06.png'
  },
  {
    title: 'Pagos globales',
    image: '/assets/illustrations/HOME/HOME_07.png'
  },
  {
    title: 'Nearshore & Offshore',
    image: '/assets/illustrations/HOME/HOME_08.png'
  },
  {
    title: 'Divisas & Stablecoins',
    image: '/assets/illustrations/HOME/HOME_09.png'
  }
];

export default function EmpresaServices() {
  return (
    <Box sx={{ bgcolor: '#F5F7FA' }}>
      <Container component={MotionViewport} maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Empresa
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, mb: 4, textAlign: 'left' }}>
        Servicios corporativos especializados para optimizar las operaciones financieras de tu empresa.
      </Typography>
      
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} lg={3} key={index}>
            <m.div variants={varFade().inUp}>
              <Box
                sx={{
                  height: 280,
                  borderRadius: 3,
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
                  },
                  '&:hover .bg-image': {
                    transform: 'scale(1.1) translateY(-20px)'
                  }
                }}
              >
                <Box
                  className="bg-image"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '120%',
                    backgroundImage: `linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.7)), url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    color: 'white',
                    zIndex: 2
                  }}
                >
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontWeight: 600,
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
              </Box>
            </m.div>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
  );
}