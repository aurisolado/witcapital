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

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    index: 1,
    title: 'Asesoría de vanguardia',
    description:
      'Brindamos asesoría de vanguardia y visión de negocios a empresas líderes, a través de un equipo multidisciplinario experimentado. Nuestro enfoque se basa en establecer objetivos claros y cumplirlos de manera eficiente, anticipándonos a las necesidades de nuestros clientes y proporcionando soluciones legales y de negocios integrales, innovadoras y efectivas para mitigar riesgos y agregar valor a sus negocios.',
    icon: 'solar:verified-check-bold',
  },
  {
    index: 2,
    title: 'Entendemos lo que necesitas',
    description:
      'Somos sensibles a las necesidades de nuestros clientes y nos anticipamos a las necesidades de sus negocios mitigando los riesgos presentes y futuros.',
    icon: 'solar:clock-circle-bold',
  },
  {
    index: 3,
    title: 'Enfoque integral',
    description:
      'Al entender las razones de negocios detrás de cada asunto, somos capaces de aplicar un enfoque integral y proveer valor agregado a los mismos.',
    icon: 'solar:shield-check-bold',
  },
];

export default function HomeProposalValue() {
  const mdUp = useResponsive('up', 'md');

  const renderBtn = (
    <Box
      gap={5}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      sx={{ my: 10 }}
    >
      {SUMMARY.map((item) => (
        <Box
          key={item.title}
          sx={{
            borderRadius: '16px',
            background: '#163300',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'start',
          }}
        >
          <Typography variant="h1i" sx={{ mb: 3, mt: 1, color: '#9fe870' }}>
            {item.index}
          </Typography>
          <Typography variant="h4" sx={{ mb: 3, mt: 1, color: '#9fe870' }}>
            {item.title}
          </Typography>

          <Typography variant="body1" sx={{ color: '#fff', marginTop: 'auto' }}>
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  const renderDescription = (
    <Stack
      sx={{
        textAlign: {
          xs: 'center',
          md: 'center',
        },
      }}
    >
      <m.div variants={varFade().inDown}>
        <Typography
          variant="h2"
          sx={{
            mt: 3,
            mb: { md: 5 },
            color: '#1c3108',
          }}
        >
          Conoce nuestra propuesta de valor
        </Typography>
      </m.div>

      {mdUp && <m.div variants={varFade().inDown}> {renderBtn} </m.div>}
    </Stack>
  );

  return (
    <Box
      sx={{
        bgcolor: '#9fe870',
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
          <Grid xs={12} md={12}>
            {renderDescription}
          </Grid>

          {!mdUp && (
            <Grid xs={12} sx={{ textAlign: 'center' }}>
              {renderBtn}
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
