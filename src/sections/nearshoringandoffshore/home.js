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

export default function Home() {
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

            <Grid xs={12} md={6} align="center">
              <m.div variants={varFade().inUp}>
                <Image
                  disabledEffect
                  alt="rocket"
                  src="/assets/illustrations/E_NEARSHORE_OFFSHORE/02.png"
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
                      mb: { md: 3 },
                    }}
                  >
                    Nearshoring
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
                    El nearshoring consiste en trasladar parte de la producción o servicios a un país cercano, generalmente con husos horarios similares, lo que facilita la comunicación y reduce costos logísticos.
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
                    Caso de éxito: México
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
                    Según “Kearney’s Global Services Location Index (GSLI) 2021”, México se mantiene como uno de los principales destinos de nearshoring para empresas estadounidenses, gracias a su ubicación geográfica y similitudes culturales.
                  </Typography>
                </m.div>
              </Stack>
            </Grid>

            
          </Grid>
        </Container>
      </Box>

    </>
  );
}
