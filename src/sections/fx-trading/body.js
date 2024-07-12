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

export default function Body() {
  const mdUp = useResponsive('up', 'md');

  return (
    <>
      <Box
        sx={{
          bgcolor: '#edefeb',
        }}
      >
        <Container
          component={MotionViewport}
          sx={{
            py: { xs: 5, md: 10 },
          }}
        >
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid xs={12} md={6} align="center">
              <m.div variants={varFade().inUp}>
                <Image
                  disabledEffect
                  alt="rocket"
                  sx={{ m: { xs: 3, md: 3 }, mr: { xs: 0, md: 5 } }}
                  src={`/assets/images/sections/fx-trading/03_COLOR.png`}
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
                      mt: 3,
                      mb: { md: 5 },
                    }}
                  >
                    FIGURA LEGAL
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
                    Los Asesores en Inversiones son personas físicas y morales que sin ser
                    intermediarios del mercado de valores proporcionan de manera habitual y
                    profesional servicios de administración de cartera de valores tomando decisiones
                    de inversión a nombre y por cuenta de terceros, otorgando de manera habitual y
                    profesional asesoría de inversión en valores, análisis y emisión de
                    recomendaciones de inversión de manera individualizada.
                  </Typography>
                </m.div>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          bgcolor: '#ffffff',
        }}
      >
        <Container
          component={MotionViewport}
          sx={{
            py: { xs: 5, md: 10 },
          }}
        >
          <Grid container alignItems="center" justifyContent="space-between">
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
                    REGULACIÓN
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
                    Como una entidad regulada por la CNBV (Con el número de folio: XXXXX) estamos
                    bajo su supervisión y en conformidad con la Ley del Mercado de Valores y las
                    Disposiciones de Carácter General emitidas por la misma comisión.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mt: 3,
                      mb: { md: 5 },
                    }}
                  >
                    La figura de Asesor en Inversiones Independiente se encuentra establecida en el
                    articulo 225 de la LMV.
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      mt: 3,
                      mb: { md: 5 },
                    }}
                  >
                    FOLIO EN TRAMITE.{' '}
                  </Typography>
                </m.div>
              </Stack>
            </Grid>

            <Grid xs={12} md={6} align="center">
              <m.div variants={varFade().inUp}>
                <Image
                  disabledEffect
                  alt="rocket"
                  sx={{ m: { xs: 3, md: 3 }, ml: { xs: 0, md: 5 } }}
                  src={`/assets/images/sections/fx-trading/04_COLOR.png`}
                />
              </m.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
