import { Container, Grid, Box, Typography, Card, CardContent, Stack, Paper } from '@mui/material';

const benefits = [
  {
    title: 'Apoyo estratégico',
    description: 'Desde el análisis de riesgos hasta la ejecución de estrategias de expansión, coordinando lo legal, financiero y operativo',
    icon: '🔑'
  },
  {
    title: 'Soluciones a medida',
    description: 'Ofrecemos cuentas internacionales, financiamiento y asesoría en divisas, con herramientas digitales para una gestión ágil de pagos globales',
    icon: '📊'
  },
  {
    title: 'Mas oportunidades',
    description: 'Te asesoramos para optimizar costos con offshoring o mejorar eficiencia con nearshoring, fortaleciendo tus canales comerciales.',
    icon: '📈'
  },
  {
    title: 'Crecimiento sólido',
    description: 'Impulsamos relocalización estratégica para fomentar innovación y estabilidad en tu negocio',
    icon: '📈'
  }
];

export default function Rol() {
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
            Nuestro rol como aliados estratégicos
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mx: 'auto',
              lineHeight: 1.6,
              color: 'text.secondary'
            }}
          >
            En Wit Biz, combinamos un profundo entendimiento de los mercados locales e internacionales con el respaldo de especialistas en regulación, logística y banca
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

          <Typography
            variant="body1"
            sx={{
              mx: 'auto',
              lineHeight: 1.6,
              color: 'text.secondary'
            }}
          >
            Con nuestra asesoría en Nearshore & Offshore, tu empresa podrá abordar la expansión internacional con seguridad, rentabilidad y una visión de largo plazo
          </Typography>
      </Container>
    </Box>
  );
}