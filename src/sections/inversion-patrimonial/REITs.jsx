import { Container, Grid, Box, Typography, Card, CardContent, Stack } from '@mui/material';

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
        bgcolor: 'background.default',
        py: { xs: 6, md: 10 }
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          {/* Header */}
          <Box textAlign="center">
            <Typography
              variant="overline"
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
                fontWeight: 800,
                letterSpacing: '-0.02em',
                textWrap: 'balance',
                mt: 1
              }}
            >
              Tu Entrada al Mercado Inmobiliario Global
            </Typography>
          </Box>

          {/* Split Section */}
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Box
                  component="img"
                  src="/assets/illustrations/P_INVERSION PATRIMONIAL/P_INVERSION PATRIMONIAL_02.png"
                  alt="Maletín con rascacielos representando REITs"
                  decoding="async"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    maxWidth: 560
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  p: 4,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  boxShadow: 1
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    mb: 3
                  }}
                >
                  Ventajas de los REITs
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.6,
                    color: 'text.secondary'
                  }}
                >
                  Los REITs permiten invertir en bienes raíces a través de acciones, sin necesidad de gestionar propiedades directamente.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Benefits Grid */}
          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 4,
                    p: 2,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardContent sx={{ p: 0, flexGrow: 1 }}>
                    <Stack spacing={2} alignItems="center" textAlign="center">
                      <Box sx={{ fontSize: 28 }}>
                        {benefit.icon}
                      </Box>
                      
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          fontSize: '1rem'
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.5
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}