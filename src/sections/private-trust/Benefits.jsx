import { Container, Grid, Box, Typography, Button, Stack } from '@mui/material';

const benefits = [
  {
    title: 'Preservación del patrimonio',
    description: 'Preserva activos clave bajo una estructura familiar, asegurando su continuidad y beneficios para futuras generaciones.'
  },
  {
    title: 'Optimización patrimonial',
    description: 'Facilita la sucesión de bienes y protege a beneficiarios vulnerables, reduciendo costos y procesos legales.'
  },
  {
    title: 'Protección de activos',
    description: 'Protege el patrimonio ante riesgos legales y reduce la exposición a embargos, asegurando su estabilidad.'
  },
  {
    title: 'Protección frente a acreedores',
    description: 'El Trust protege los bienes de acreedores y garantiza la continuidad patrimonial en contextos complejos.'
  },
  {
    title: 'Cumplimiento hereditario',
    description: 'En jurisdicciones donde existe la figura de herederos obligatorios, el Trust permite planificar la distribución de manera estratégica y equitativa.'
  },
  {
    title: 'Privacidad y flexibilidad',
    description: 'Los Trusts ofrecen privacidad y permiten personalizar la distribución del patrimonio según las reglas del Settlor.'
  }
];

export default function Benefits() {
  return (
    <Box
      component="section"
      role="region"
      aria-label="Beneficios del Private Trust"
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
            textWrap: 'balance',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 120,
              height: 6,
              bgcolor: 'primary.light',
              borderRadius: 3
            }
          }}
        >
          Beneficios Principales
        </Typography>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 0.5,
                    flexShrink: 0,
                    '&::after': {
                      content: '"✓"',
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: 'bold'
                    }
                  }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 1,
                      lineHeight: 1.3
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
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            size="large"
            href="/business"
            sx={{
              borderRadius: 999,
              px: 3.5,
              py: 1.2,
              fontSize: '1.1rem',
              fontWeight: 600,
              textTransform: 'none'
            }}
          >
            Agenda una cita
          </Button>
        </Box>
      </Container>
    </Box>
  );
}