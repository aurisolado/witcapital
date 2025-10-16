import { Container, Grid, Box, Typography, Card, CardContent, Stack } from '@mui/material';

const benefits = [
  {
    title: 'Experiencia y Trayectoria',
    description: 'Nuestro equipo domina las tendencias en divisas y stablecoins',
    icon: '🛡️'
  },
  {
    title: 'Solidez regulatoria',
    description: 'Cumplimos con la normativa financiera tanto a nivel nacional como internacional',
    icon: '⚖️'
  },
  {
    title: 'Flexibilidad y soporte',
    description: 'Te acompañamos desde tu primera operación hasta la administración continua de tus activos',
    icon: '✅'
  }
];

export default function Usage() {
  return (
    <Box
      component="section"
      role="region"
      aria-label="Uso de Trusts en inversión inmobiliaria"
      sx={{
        bgcolor: 'background.default',
        py: { xs: 6, md: 10 }
      }}
    >
      <Container maxWidth="lg">
        
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={1.5}>
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  variant="outlined"
                  sx={{
                    borderRadius: 4,
                    p: 2.5
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Box
                        sx={{
                          fontSize: 24,
                          mt: 0.5,
                          flexShrink: 0
                        }}
                      >
                        {benefit.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
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
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 4,
                    p: 2.5
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      
                      <Box>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: 600,
                            mb: 1,
                            fontSize: '1rem'
                          }}
                        >
                          Por qué Wit Biz es tu aliado estratégico
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'text.secondary',
                            lineHeight: 1.5
                          }}
                        >
                          Con Wit Biz, dispones de un servicio profesional que integra innovación, experiencia y seguridad regulatoria, para aprovechar al máximo las oportunidades que ofrecen las divisas y las stablecoins.
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}