import { Container, Grid, Box, Typography, Card, CardContent, Stack } from '@mui/material';

const benefits = [
  {
    title: 'Alta liquidez',
    description: 'La alta participación en el mercado permite ejecutar operaciones rápidamente y aprovechar cambios inmediatos.',
    icon: '🔑'
  },
  {
    title: 'Disponible 24/7',
    description: 'Disponible 24/5, se adapta a todos los husos horarios y perfiles de inversión.',
    icon: '📊'
  },
  {
    title: 'Diversificación',
    description: 'Invertir en divisas diversifica tu portafolio y reduce riesgos geográficos.',
    icon: '📈'
  },
  {
    title: 'Apalancamiento',
    description: 'Puedes operar con apalancamiento, aumentando potencial de ganancia y riesgo',
    icon: '💧'
  }
];

export default function Beneficios() {
  return (
    <Box
      component="section"
      role="region"
      aria-label="Beneficios del Mercado de Divisas"
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
              variant="h2"
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.02em',
                textWrap: 'balance',
                mt: 1
              }}
            >
              Beneficios del Mercado de Divisas
            </Typography>
          </Box>

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