import { Box, Container, Stack, Typography } from '@mui/material';

const benefits = [
  {
    title: 'Acceso Simple',
    description: 'Inversión en bienes raíces sin trámites de compraventa ni gestión directa.',
    icon: '🔑'
  },
  {
    title: 'Diversificación',
    description: 'Activos repartidos en diferentes sectores y ubicaciones, disminuyendo riesgos.',
    icon: '📊'
  },
  {
    title: 'Flujo Seguro',
    description: 'Generan ingresos por alquiler y plusvalía, distribuyendo dividendos frecuentes.',
    icon: '📈'
  },
  {
    title: 'Liquidez',
    description: 'Al cotizar en mercados bursátiles, es posible entrar y salir con agilidad.',
    icon: '💧'
  }
];

export default function REITs() {
  return (
    <Box
      component="section"
      role="region"
      aria-label="REITs Mercado Inmobiliario"
      sx={{
        bgcolor: '#F5F7FA',
        pt: { xs: 6, md: 10 }
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Header */}
          <Box textAlign="center">
            <Typography
              variant="h2"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: 1
              }}
            >
              REITs
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                letterSpacing: '-0.02em',
                textWrap: 'balance',
                mt: 1
              }}
            >
              Tu Entrada al Mercado Inmobiliario Global
            </Typography>
          </Box>



        </Stack>
      </Container>
    </Box>
  );
}