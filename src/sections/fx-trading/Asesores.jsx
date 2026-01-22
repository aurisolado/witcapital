import { Container, Grid, Box, Typography, Card, CardContent, Stack, Paper } from '@mui/material';

const benefits = [
  {
    title: 'Análisis Personalizado',
    description: 'Revisamos tu perfil de riesgo y objetivos financieros para definir la mejor estrategia de inversión',
    icon: '🔑'
  },
  {
    title: 'Herramientas de vanguardia',
    description: 'Empleamos plataformas y metodologías de análisis técnico y fundamental para detectar oportunidades con mayor precisión',
    icon: '📊'
  },
  {
    title: 'Educación continua',
    description: 'Brindamos capacitaciones y reportes regulares para que tomes decisiones basadas en información sólida',
    icon: '📈'
  }
];

export default function Asesores() {
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
            Asesores en Inversiones
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
            En Wit Biz, contamos con un equipo especializado en Forex que combina experiencia, conocimiento técnico y visión estratégica del entorno global. Te ofrecemos:
          </Typography>

          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
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
        </Paper>
      </Container>
    </Box>
  );
}