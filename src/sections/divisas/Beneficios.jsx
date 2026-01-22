import { Container, Grid, Box, Typography, Card, CardContent, Stack, Paper } from '@mui/material';

const benefits = [
  {
    title: 'Asesoría a medida',
    description: 'Te asesoramos en el uso de stablecoins y en la optimización de divisas para reducir costos y riesgos cambiarios',
    icon: '🔑'
  },
  {
    title: 'Eficiencia y seguridad',
    description: 'Agilizamos pagos globales con stablecoins, reduciendo costos, volatilidad y ampliando tu alcance',
    icon: '📊'
  },
  {
    title: 'Conversión instantánea',
    description: 'Mitiga la volatilidad con conversiones rápidas a divisas y registra cada operación para un mayor control y cumplimiento fiscal',
    icon: '📈'
  },
  {
    title: 'Soporte continuo',
    description: 'Ofrecemos reportes estratégicos, capacitación en herramientas digitales y planes personalizados con total transparencia en costos',
    icon: '📈'
  }
];

export default function Beneficios() {
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
            Beneficios del mercado de divisas
          </Typography>

         

          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 1,
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

      </Container>
    </Box>
  );
}