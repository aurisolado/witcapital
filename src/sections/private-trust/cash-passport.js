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
import { Box } from '@mui/material';
import { MotionViewport, varFade } from 'src/components/animate';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function CashPassport() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        bgcolor: '#ffffff',
      }}
    >
      <Container
        component={MotionViewport}
        sx={{
          py: { xs: 10, md: 15 },
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 0 }}
          sx={{ marginBottom: 20 }}
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
                  Tu dinero, donde y cuando quieras.
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h3"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Cash Passport -{' '}
                  <span
                    style={{
                      color: '#9fe870',
                    }}
                  >
                    Tarjeta multidivisas
                  </span>
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
                  Es una tarjeta multidivisas que te permitirá realizar compras y retiros de
                  efectivo durante tus viajes alrededor del mundo llevando hasta 5 divisas
                  diferentes: Dólar Americano, Dólar Canadiense, Libra Esterlina, Euro y Yen
                  Japonés, de una manera segura con el respaldo de Mastercard.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/imaginary-v2/images/6dad8c4d2ad3295a21fcd6ab9893f6f2-Marble%20card@2x.png"
              />
            </m.div>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          sx={{ marginBottom: 20 }}
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
                    mb: { md: 5 },
                  }}
                >
                  Ventajas
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#edefeb',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="subtitle1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Aceptación Internacional.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#edefeb',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="subtitle1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Call Center gratuito en diferentes idiomas, 24/7/365.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#edefeb',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="subtitle1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Compras seguras en línea gracias al Protocolo de Seguridad 3D Secure.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#edefeb',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="subtitle1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Elimina el uso de efectivo.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#edefeb',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="subtitle1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  No requiere garantías personales.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#edefeb',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="subtitle1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Realiza recargas a través de los diferentes canales.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#edefeb',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="subtitle1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Tarjeta inteligente que selecciona la divisa dependiendo la moneda local del país
                  donde te encuentres.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#edefeb',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="subtitle1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Tecnología Contactless. Realiza pagos únicamente acercando tu tarjeta a un
                  dispositivo compatible con este método de pago.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#edefeb',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="subtitle1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Transfiere fondos de una divisa a otra.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#edefeb',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="subtitle1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Servicio único en el mercado.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12}>
            <Stack
              sx={{
                textAlign: 'center',
                backgroundColor: '#9fe870',
                borderRadius: '10px',
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography variant="subtitle1" sx={{ mt: 3, mb: 3, p: 1 }}>
                  Autorizadas por Mastercard® para pagos TPV, compras por internet y retiro en
                  cajeros ATM en México y el mundo.
                </Typography>
              </m.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
