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

export default function ComicSon() {
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
                  Muy pronto. ¡No te lo pierdas!
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
                  FX -{' '}
                  <span
                    style={{
                      color: '#9fe870',
                    }}
                  >
                    Trading
                  </span>
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://img.freepik.com/fotos-premium/candlestick-trading-grafico-simbolo-inversion-mercado-valores-3d-rendering-ilustracion_276199-177.jpg"
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
