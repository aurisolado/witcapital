import { m } from 'framer-motion';
// @mui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// routes
import { paths } from 'src/routes/paths';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { MotionViewport, varFade } from 'src/components/animate';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

export default function LaborAdvice() {
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
                  variant="h3"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Asesoría Laboral
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
                  Nuestro equipo de la práctica laboral provee asesoría en asuntos laborales y de
                  seguridad social, incluyendo estrategias de contratación, en el establecimiento y
                  modificación de prestaciones, así como en planes, políticas y condiciones de
                  trabajo y en el cumplimiento de disposiciones en materia laboral. También contamos
                  con experiencia en negociaciones colectivas de trabajo y cuestiones relativas a
                  sindicatos.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/web-art/assets/illustrations/globe-medium@1x.webp"
              />
            </m.div>
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 0 }}
          sx={{ marginBottom: 20 }}
        >
          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/web-art/assets/illustrations/infinite-medium@1x.webp"
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
                  variant="h3"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Cumplimiento legal
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
                  La asesoría laboral guía a empresas y empleados sobre leyes laborales, contratos,
                  horarops, salarios, beneficios, despidos, y más. Los abogados laborales también
                  representan a empleados que han sido víctimas de discriminación, acoso, salarios
                  injustos, despidos injustos y otros asuntos laborales.
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
                  variant="h3"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Resolución de conflictos
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
                  Los asesores laborales resuelven disputas y conflictos entre empleados y
                  empleadores, incluyendo disputas sobre salarios, beneficios, horas de trabajo,
                  condiciones de trabajo, acoso, discriminación, despidos y más.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/web-art/assets/illustrations/heart-medium@1x.webp"
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
