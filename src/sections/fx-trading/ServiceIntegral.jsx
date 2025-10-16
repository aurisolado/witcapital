import { Container, Grid, Box, Typography, Card, CardContent, Button, Stack } from '@mui/material';

const services = [
  {
    title: 'Seguridad y confianza',
    description: 'Tu información y transacciones se mantienen bajo estrictos protocolos de confidencialidad'
  },
  {
    title: 'Transparencia en comisiones y costos',
    description: 'Conoces de antemano las tarifas de tus operaciones, evitando cargos ocultos y facilitando un mejor control de tus inversiones'
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


          <Grid container spacing={3}>
              <Grid item xs={12} md={12} >
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
                      variant="body2"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6
                      }}
                    >
                      En Wit Biz te ayudamos a invertir en Forex de forma rentable y segura, con asesoría personalizada, análisis experto y total apego a la regulación
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>

          
        </Stack>
      </Container>
    </Box>
  );
}