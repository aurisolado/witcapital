import { Container, Grid, Box, Typography, Card, CardContent, Stack, Paper } from '@mui/material';

const benefits = [
  {
    title: 'Mayor Estabilidad',
    description: 'Minimiza el riesgo de movimientos extremos',
    icon: '🔑'
  },
  {
    title: 'Rapidez y bajas comisiones',
    description: 'Ideales para pagos y transferencias internacionales',
    icon: '📊'
  },
  {
    title: 'Conversión Inmediata',
    description: 'Muchas plataformas permiten convertir stablecoins a divisas tradicionales casi al instante',
    icon: '📈'
  }
];

export default function Stablecoins() {
  return (
    <Box
      component="section"
      role="region"
      aria-label="Estados Unidos paso financiero"
      sx={{
        bgcolor: 'background.default',
        py: { xs: 6, md: 10 }
      }}
    >
      <Container maxWidth="lg">
        <Paper
          sx={{
            borderRadius: 5,
            boxShadow: 2,
            py: { xs: 4, md: 6 },
            px: { xs: 2, md: 4 }
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: { xs: 4, md: 6 },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textWrap: 'balance'
            }}
          >
            Stablecoins la nueva cara del dinero digital
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: '46ch',
              mx: 'auto',
              lineHeight: 1.6,
              color: 'text.secondary'
            }}
          >
            A diferencia de criptomonedas más volátiles generalmente una moneda fiduciaria como el dólar, lo que reduce las fluctuaciones bruscas de precio
          </Typography>

          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 4,
                    p: 2.5,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardContent sx={{ p: 0, flexGrow: 1 }}>
                    <Stack spacing={2} alignItems="center" textAlign="center">
                      <Box sx={{ fontSize: 32 }}>
                        {benefit.icon}
                      </Box>
                      
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6
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
        </Paper>
      </Container>
    </Box>
  );
}