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
    title: 'Transfiere al instante',
    description:
      'Transfiere a tu cuenta de inversión en Estados Unidos de forma instantánea y segura.',
    icon: 'solar:verified-check-bold',
  },
  {
    index: 2,
    title: 'En alianza con STP',
    description:
      'Trabajamos con el Sistema de Transferencia de Pagos (STP) para ofrecerte el mejor servicio.',
    icon: 'solar:clock-circle-bold',
  },
  {
    index: 3,
    title: 'El mejor tipo de cambio del mercado',
    description: 'Nadie te ofrece un tipo de cambio más competitivo que nosotros. ¡Compruébalo!',
    icon: 'solar:shield-check-bold',
  },
  {
    index: 4,
    title: 'Seguridad de clase mundial',
    description:
      'Tus datos e información personal resguardados con la mayor tecnología, encriptados para su mazima protección.',
    icon: 'solar:shield-check-bold',
  },
  {
    index: 5,
    title: 'Supervisados por la Comisión Nacional Bancaria y de Valores (CNBV)',
    description:
      'Puedes estar seguro de que estamos regulados por la CNBV y cumplimos con todas las disposiciones de la Ley del Mercado de Valores.',
    icon: 'solar:shield-check-bold',
  },
];
// ----------------------------------------------------------------------

export default function Home() {
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
      {mdUp && <m.div variants={varFade().inDown}> {renderBtn} </m.div>}
    </Stack>
  );

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
