import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';
import { useState } from 'react';

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
              Explora el Mundo de las Divisas
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
              Las divisas son monedas de distintos países que se utilizan en transacciones comerciales y financieras. Para las personas físicas, la compra y venta de divisas puede ofrecer
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid Item xs={12} md={12}>

              <Grid container spacing={3}>
                <Grid Item xs={12} md={6}>
                  {services.map((service, index) => (
                    <Grid item xs={12} md={12} key={index}>
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

                <Grid Item xs={12} md={5}>
                  <Box
                    component="img"
                    src="/assets/illustrations/P_DIVISAS_STABLECOINS/SECTION1.png"
                    alt="Personas sosteniendo piezas de rompecabezas con la palabra TRUST"
                    sx={{
                      width: '100%',
                      maxWidth: 350,
                      height: 'auto',
                      objectFit: 'contain',
                    }}
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