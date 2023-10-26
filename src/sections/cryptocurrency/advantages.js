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

const SUMMARY = [
  {
    index: 1,
    title: 'Asesoría de vanguardia',
    description: 'Asesoría especializada en el mercado de cryptomonedas.',
    icon: 'solar:verified-check-bold',
  },
  {
    index: 2,
    title: 'Entendemos lo que necesitas',
    description: 'Servicio personalizado para soporte de la operación.',
    icon: 'solar:clock-circle-bold',
  },
  {
    index: 3,
    title: 'Enfoque integral',
    description: 'Operaciones el mismo día y en horario extendido.',
    icon: 'solar:shield-check-bold',
  },
  {
    index: 4,
    title: 'Enfoque integral',
    description: 'Sencillez, rapidez y seguridad.',
    icon: 'solar:shield-check-bold',
  },
];

export default function Advantages() {
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
            background: '#fff',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'start',
          }}
        >
          <Typography variant="h1i" sx={{ mb: 3, mt: 1, color: '#0e0f0c' }}>
            {item.index}
          </Typography>
          <Typography variant="h4" sx={{ mb: 3, mt: 1, color: '#0e0f0c' }}>
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
            color: '#0e0f0c',
          }}
        >
          Asesoramos a nuestros clientes en la compra, venta y monetización de cryptomonedas.
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography
          variant="h4"
          sx={{
            mt: 3,
            mb: { md: 5 },
            color: '#0e0f0c',
          }}
        >
          Ve las ventajas
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}> {renderBtn} </m.div>
    </Stack>
  );

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
        >
          <Grid xs={12} md={12}>
            {renderDescription}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
