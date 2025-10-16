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
import LogoDark from 'src/components/logo/logo-dark';

// ----------------------------------------------------------------------

export default function Body() {
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
            py: { xs: 10, md: 15 },
          }}
        >
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
                      mb: { md: 3 },
                    }}
                  >
                    Offshoring
                  </Typography>
                </m.div>

                <m.div variants={varFade().inDown}>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 3,
                      mb: { md: 3 },
                    }}
                  >
                    El offshoring implica la deslocalización de operaciones a un país lejano, por lo general para aprovechar costos laborales más bajos, incentivos fiscales o disponibilidad de talento especializado
                  </Typography>
                </m.div>

                <m.div variants={varFade().inDown}>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 3,
                      mb: { md: 3 },
                    }}
                  >
                    Caso de éxito: India
                  </Typography>
                </m.div>

                <m.div variants={varFade().inDown}>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 3,
                      mb: { md: 3 },
                    }}
                  >
                    De acuerdo con “Deloitte’s Global Outsourcing Survey 2022”, India sigue siendo un destino popular de offshoring en tecnología y servicios de TI, debido a la experiencia de su fuerza laboral y costos competitivos.
                  </Typography>
                </m.div>
              </Stack>
            </Grid>

            <Grid xs={12} md={6} align="center">
              <m.div variants={varFade().inUp}>
                <Image
                  disabledEffect
                  alt="rocket"
                  src="/assets/illustrations/E_NEARSHORE_OFFSHORE/03.png"
                />
              </m.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

    </>
  );
}
