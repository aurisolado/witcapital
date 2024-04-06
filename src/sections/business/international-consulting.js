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

export default function InternationalConsulting() {
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
                  Asesoria Internacional
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
                  Gracias a nuestro sofisticado y experimentado grupo de abogados y a nuestro muy
                  particular acercamiento estratégico de negocios, hemos sido capaces de ayudar a
                  nuestros clientes, abordando cada transacción con soluciones hechas “a la medida”
                  y con extraordinarios resultados, ya que asumimos sus asuntos como propios,
                  buscando siempre soluciones legales prácticas, efectivas, innovadoras, creativas,
                  exitosas y sin riesgos.
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
                  La colaboración entre las áreas fiscales, bancarias y corporativas del despacho
                  nos permite identificar y recomendar estructuras transfronterizas eficientes para
                  las operaciones y mitigar riesgos potenciales.
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h5"
                  sx={{
                    mt: 3,
                    mb: { md: 3 },
                  }}
                >
                  Asesoramos a nuestros clientes para expandirse más allá de las fronteras en un
                  marco de certeza jurídica.
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/swift-codes-assets/img/magnifying-glass.webp"
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
