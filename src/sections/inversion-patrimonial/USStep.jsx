import { Container, Grid, Box, Typography, Card, CardContent, Paper, Stack } from '@mui/material';

const benefits = [
  {
    title: 'Crecimiento Sólido',
    description: 'Mercado dinámico y transparente con múltiples oportunidades para diversificar y proteger tu patrimonio en contextos económicos cambiantes.',
    icon: '📈'
  },
  {
    title: 'Financiamiento Competitivo',
    description: 'Tasas y lenders para inversionistas extranjeros, lo que eleva los márgenes de rentabilidad.',
    icon: '💰'
  },
  {
    title: 'Cobertura Cambiaria',
    description: 'Al operar en dólares obtienes cobertura ante riesgo cambiario y refuerzas la diversificación de portafolio.',
    icon: '💱'
  }
];

export default function USStep() {
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
            Estados Unidos tu próximo paso financiero
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