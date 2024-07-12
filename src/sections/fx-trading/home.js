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

export default function Home() {
  return (
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
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 10 }}
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
                  SOMOS UN ASESOR EN INVERSIONES INDEPENDIENTE
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
                  <span
                    style={{
                      color: '#9fe870',
                    }}
                  >
                    FX - Trading
                  </span>
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography variant="body1" sx={{}}>
                  El mercado de divisas, comúnmente conocido como Forex o FX, es el mercado global
                  para el comercio de la moneda de una nación por otra.
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
                  Los operadores de Forex transactúan en uno de los tres mercados distintos: el
                  spot, el forward o el mercado de futuros.{' '}
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Button
                  size="large"
                  variant="contained"
                  target="_blank"
                  href="https://www.revolut.com/gettheapp/?af_channel=website_direct&af_force_deeplink=true&af_sub1=%7B%22conversion_page_url%22%3A%22https%3A%2F%2Fwww.revolut.com%2Fes-MX%2F%22%2C%22cookie_consent%22%3A%5B%22ads%22%2C%22analytics%22%5D%2C%22landing_page_url%22%3A%22https%3A%2F%2Fwww.revolut.com%2Fes-MX%2F%22%2C%22qr_code%22%3Afalse%7D&pid=website"
                  sx={{
                    mt: { xs: 5, md: 1 },
                    color: '#212B36',
                    backgroundColor: '#9fe870',
                    '&:hover': {
                      backgroundColor: '#7abc50',
                    },
                  }}
                >
                  Únete a la lista de espera
                </Button>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                sx={{ m: { xs: 3, md: 3 } }}
                src={`/assets/images/sections/fx-trading/01_COLOR.png`}
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
