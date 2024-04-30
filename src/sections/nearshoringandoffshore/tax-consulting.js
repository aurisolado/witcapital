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

export default function TaxConsulting() {
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
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/imaginary-v2/images/1d7dd61fe67771f27a03326936634a49-Receive.png"
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
                  Consultoría Fiscal
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
                  Nuestro equipo de Consultoría y Litigio Fiscal presta servicios en transacciones
                  sofisticadas y complejas, con una visión clara de los aspectos financieros y
                  legales que puedan impactar a  los negocios de nuestros clientes. Los servicios
                  que ofrecemos están enfocados en planeación y consultoría fiscal, tanto en
                  transacciones domésticas como transfronterizas para una amplia gama de industrias,
                  así como en apoyar a nuestros clientes a interactuar con las autoridades
                  tributarias y brindarles estrategias de litigio sólidas.
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
                  Nuestra visión es completamente integral y evalúa los aspectos financieros y
                  legales de todos los asuntos que afectan al cliente. Esto se traduce directamente
                  en un manejo multidisciplinario de cada caso que nos es encomendado, para prestar
                  un servicio “a la medida” y proporcionar un valor agregado tangible a nuestros
                  clientes. Asimismo, nuestro equipo fiscal se destaca por su integración total en
                  las áreas de consultoría y de litigio, donde sus miembros prestan servicios
                  legales integrales.
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h5"
                  sx={{
                    mt: 3,
                  }}
                >
                  Nuestra práctica fiscal es reconocida por sus altos conocimientos técnicos e
                  innovadora visión de negocios.
                </Typography>
              </m.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
