import { m } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
// routes
// components
import { Box } from '@mui/material';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    index: 1,
    title: 'Asesoría especializada en el mercado de divisas de contado y a futuro.',
    description: 'Asesoría especializada en el mercado de divisas de contado y a futuro.',
    icon: 'solar:verified-check-bold',
  },
  {
    index: 2,
    title: 'Servicio personalizado para soporte de la operación.',
    description: 'Servicio personalizado para soporte de la operación.',
    icon: 'solar:clock-circle-bold',
  },
  {
    index: 3,
    title: 'Operaciones el mismo día y en horario extendido.',
    description: 'Operaciones el mismo día y en horario extendido.',
    icon: 'solar:shield-check-bold',
  },
  {
    index: 4,
    title: 'Sencillez, rapidez y seguridad.',
    description: 'Sencillez, rapidez y seguridad.',
    icon: 'solar:shield-check-bold',
  },
];

export default function Advantages() {
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
          Asesoramos a nuestros clientes en la compra, venta y monetización de divisas.
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
