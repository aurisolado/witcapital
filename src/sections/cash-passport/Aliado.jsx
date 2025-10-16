import { Container, Grid, Box, Typography, Card, CardContent, Stack, Paper, Button } from '@mui/material';

const benefits = [
  {
    title: 'Asesoria Integral',
    description: 'Te orientamos en la compra y venta tanto de divisas físicas como de stablecoins',
    icon: '🔑'
  },
  {
    title: 'Capacitación Continua',
    description: 'Asesoría en billeteras, plataformas y gestión de activos',
    icon: '📊'
  },
  {
    title: 'Atención Personalizada',
    description: 'Creamos un plan personalizado que equilibra riesgo, rendimiento y seguridad',
    icon: '📈'
  }
];

export default function Aliado() {
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
            Tu aliado financiero personal
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mx: 'auto',
              lineHeight: 1.6,
              color: 'text.secondary'
            }}
          >
            En Wit Biz, operamos bajo estrictas regulaciones que protegen tu información y tu capital. Realizamos transacciones con total claridad en comisiones y costos, fortaleciendo la confianza en cada operación. Asimismo, nos mantenemos al día con los requisitos legales de cada jurisdicción para que inviertas con la certeza de contar con un socio confiable
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
        </Paper>
      </Container>
    </Box>
  );
}