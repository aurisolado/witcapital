import { Container, Grid, Box, Typography, Card, CardContent, Stack, Paper } from '@mui/material';
import { m } from 'framer-motion';
import { MotionViewport, varFade } from 'src/components/animate';
import Image from 'src/components/image';

export default function Estrategia() {
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
            Estrategias financieras globales con divisas y stablecoins
          </Typography>

          <Grid container spacing={20}>
           
              <Grid item xs={12} md={6}>
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
                        
                        <m.div variants={varFade().inUp}>
                          <Image
                            disabledEffect
                            alt="rocket"
                            src="/assets/illustrations/E_DIVISAS_STABLECOINS_01/02.png"
                          />
                        </m.div>
                      </Box>
                      
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1
                        }}
                      >
                        Divisas
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6
                        }}
                      >
                        El peso, dólar y euro son claves en pagos globales. El mercado de divisas mueve más de 7 billones diarios, impulsando cobertura y competitividad.
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>



              <Grid item xs={12} md={6}>
                <Card
                  variant="outlined"
                  sx={{
                    p: 2.5,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardContent sx={{ p: 0, flexGrow: 1 }}>
                    <Stack spacing={2} alignItems="center" textAlign="center">
                      <Box sx={{ fontSize: 32 }}>
                        
                        <m.div variants={varFade().inUp}>
                          <Image
                            disabledEffect
                            alt="rocket"
                            src="/assets/illustrations/E_DIVISAS_STABLECOINS_01/03.png"
                          />
                        </m.div>
                      </Box>
                      
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1
                        }}
                      >
                        Stablecoins
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6
                        }}
                      >
                        Stablecoins como PYUSD o USDC, ligadas al dólar, ofrecen pagos globales rápidos, estables y con bajas comisiones
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
          </Grid>

      </Container>
    </Box>
  );
}