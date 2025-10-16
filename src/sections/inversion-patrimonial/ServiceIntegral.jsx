import { Container, Grid, Box, Typography, Card, CardContent, Button, Stack } from '@mui/material';

const services = [
  {
    title: 'Asesoría personalizada',
    description: 'Definimos tus objetivos financieros y evaluamos tu perfil de riesgo para recomendar inmuebles, REITs o esquemas de Trust adecuados.'
  },
  {
    title: 'Inversión en bienes raíces internacionales',
    description: 'Especialmente en EE.UU., permite diversificar y proteger tu patrimonio. En Wit Biz diseñamos estrategias con REITs y Trusts para maximizar rendimientos y reducir riesgos, con un acompañamiento profesional e integral.'
  },
  {
    title: 'Implementación y seguimiento',
    description: 'Asistimos en la creación del Trust e inversión inmobiliaria, ajustando la estrategia según el rendimiento.'
  },
  {
    title: 'Evaluación legal y fiscal',
    description: 'Evaluamos tu perfil y objetivos para recomendar inversionistas inmobiliarios y esquemas de Trust adecuados.'
  },
  {
    title: 'Transparencia y confidencialidad',
    description: 'Resguardamos la información y mantenemos informado a cada momento, brindando un servicio seguro y confiable.'
  },
  {
    title: 'Estructuración con REITs y Trusts',
    description: 'Selección, ejecución y monitoreo con criterios de riesgo/retorno, siempre alineado a tus objetivos.'
  }
];

export default function ServiceIntegral() {
  return (
    <Box
      component="section"
      role="region"
      aria-label="Servicio integral de inversión"
      sx={{
        bgcolor: 'background.default',
        py: { xs: 6, md: 10 }
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Box textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                letterSpacing: '-0.02em',
                textWrap: 'balance',
                mb: 3,
                position: 'relative',
                '& span': {
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    right: 0,
                    height: 3,
                    bgcolor: 'primary.light',
                    borderRadius: 1.5
                  }
                }
              }}
            >
              Nuestro servicio{' '}
              <Box component="span">
                integral
              </Box>
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
              En Wit Biz, te acompañamos en cada fase de tu inversión en bienes raíces en Estados Unidos.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} md={6} key={index}>
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
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        lineHeight: 1.3
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', pt: 2 }}>
            <Button
              variant="contained"
              size="large"
              href="/contact"
              sx={{
                borderRadius: 999,
                px: 3.5,
                py: 1.2,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none'
              }}
            >
              Contáctanos
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}