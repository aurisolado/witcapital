import { m } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// routes
// components
import { Box, Button } from '@mui/material';
import { MotionViewport, varFade } from 'src/components/animate';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function EquityInvestment() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        bgcolor: '#edefeb',
      }}
    >
      <Container
        component={MotionViewport}
        sx={{
          py: { xs: 5, md: 5 },
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 0 }}
          sx={{
            mt: 5,
            marginBottom: 10,
          }}
        >
          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/web-art/assets/illustrations/magnifying-glass-large@1x.webp"
              />
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h2"
                  sx={{
                    mt: { xs: 1, md: 3 },
                    mb: { md: 3 },
                  }}
                >
                  ¿Quieres invertir en Bienes Raíces Internacionales?
                </Typography>
                <m.div variants={varFade().inDown}>
                  <Button
                    size="large"
                    variant="contained"
                    target="_blank"
                    href="https://calendly.com/witbiz"
                    sx={{
                      my: { xs: 3, md: 3 },
                    }}
                  >
                    Programación de citas
                  </Button>
                </m.div>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h4"
                  sx={{
                    mt: 3,
                    mb: { md: 3 },
                  }}
                >
                  <span
                    style={{
                      color: '#163300',
                    }}
                  >
                    En Wit Biz diseñamos estrategias de inversión personales para alcanzar tus
                    objetivos patrimoniales.
                  </span>
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                  }}
                >
                  La inversión patrimonial es una estrategia de inversión a mediano plazo que
                  consiste en adquirir bienes raíces en mercados internacionales para incrementar tu
                  patrimonio, generando ingresos a través de la renta y la valorización de la
                  propiedad. Esta estrategia requiere una gestión cuidadosa del análisis de las
                  mejores opciones de inversión y una comprensión profunda del mercado inmobiliario
                  global.
                </Typography>
              </m.div>
            </Stack>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          sx={{ marginBottom: 10 }}
        >
          <Grid xs={12}>
            <Stack
              sx={{
                textAlign: 'center',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h2"
                  sx={{
                    mt: 3,
                    mb: { xs: 5, md: 5 },
                  }}
                >
                  Ventajas de la Inversión Patrimonial
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="body1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Generación de ingresos por renta.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="body1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Potencial de aumento del valor de la propiedad a largo plazo.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="body1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Diversificación de la cartera de inversión.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="body1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Inversión en activos tangibles.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#ffffff',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="body1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Protección contra la inflación.
                </Typography>
              </m.div>
            </Stack>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 0 }}
        >
          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h2"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  ¿Qué es un fondo de inversión inmobiliario?
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  También llamado REIT (Real Estate Investment Trusts), es una opción para que
                  realices inversiones patrimoniales en bienes raíces internacionales. Estos fondos
                  reúnen tu capital con el de otros inversionistas para adquirir y gestionar una
                  cartera diversificada de propiedades inmobiliarias. Al invertir en fondos de
                  inversión inmobiliarios, los inversionistas pueden beneficiarse de la exposición
                  al mercado inmobiliario internacional sin tener que gestionar directamente las
                  propiedades. Los rendimientos se generan a través de los ingresos por alquiler y
                  las ganancias de la venta de las propiedades del fondo.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/web-art/assets/illustrations/plane-large@1x.webp"
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
