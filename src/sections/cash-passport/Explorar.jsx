import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';

const services = [
  {
    title: 'Diversificación de portafolio',
    description: 'Protege tu capital ante fluctuaciones económicas en tu país'
  },
  {
    title: 'Oportunidades de crecimiento',
    description: 'Saca el mayor provecho de las variaciones del mercado cambiario para potenciar tu dinero'
  }
];


export default function Explorar() {


  return (
    <Box
      component="section"
      role="region"
      aria-label="Servicio integral de inversión"
      sx={{
        bgcolor: '#F5F7FA',
        py: { xs: 6, md: 10 }
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Box textAlign="center">
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,

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
              Explora el Mundo de las Divisas
            </Typography>

            <Typography
              variant="body2"
              sx={{
                mb: 4,
              }}
            >
              Las divisas son monedas de distintos países que se utilizan en transacciones comerciales y financieras. Para las personas físicas, la compra y venta de divisas puede ofrecer
            </Typography>
          </Box>
          <Grid container sx={{ justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
            <Grid item xs={12}>

              <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6}>
                  {services.map((service, index) => (
                    <Grid item xs={12} key={index}>
                      <Card sx={{ p: 2.5, boxShadow: 'none' }}>
                        <CardContent
                          sx={{
                            p: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
                            {service.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {service.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Grid item xs={12} md={5}>
                  <Box
                    component="img"
                    src="/assets/illustrations/P_DIVISAS_STABLECOINS/SECTION1.png"
                    sx={{ width: '100%', objectFit: 'contain' }}
                  />
                </Grid>
              </Grid>

            </Grid>
          </Grid>



        </Stack>
      </Container>
    </Box>
  );
}