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

export default function Legal() {
  const mdUp = useResponsive('up', 'md');

  const renderDescription = (
    <Stack>
      <m.div variants={varFade().inDown}>
        <Typography
          variant="caption"
          sx={{
            mt: 3,
            mb: { md: 5 },
            color: '#fff',
          }}
        >
          Aviso legal{' '}
        </Typography>
      </m.div>

      <m.div variants={varFade().inDown}>
        <Typography
          variant="caption"
          component={'p'}
          sx={{
            color: '#fff',
          }}
        >
          Las operaciones con instrumentos financieros implican un elevado riesgo, incluyendo la
          pérdida parcial o total del capital invertido, y pueden no ser adecuadas para todos los
          inversores. 
        </Typography>

        <Typography
          variant="caption"
          component={'p'}
          sx={{
            color: '#fff',
          }}
        >
          Antes de lanzarse a invertir en un instrumento financiero, infórmese debidamente de los
          riesgos y costes asociados a este tipo operaciones en los mercados financieros. Fije unos
          objetivos de inversión adecuados a su nivel de experiencia y su apetito por el riesgo y,
          siempre que sea necesario, busque asesoramiento profesional.
        </Typography>

        <Typography
          variant="caption"
          component={'p'}
          sx={{
            color: '#fff',
          }}
        >
          Wit Capital quiere recordarle que la información contenida en este sitio web no se ofrece
          necesariamente ni en tiempo real ni de forma exacta. Los datos y precios de la web no
          siempre proceden de operadores de mercado o bolsas, por lo que los precios podrían diferir
          del precio real de cualquier mercado. Son precios orientativos que en ningún caso deben
          utilizarse con fines bursátiles. Ni Wit Capital ni ninguno de los proveedores de los datos
          de esta web asumen responsabilidad alguna por las pérdidas o resultados perniciosos de sus
          operaciones basados en su confianza en la información contenida en la web.
        </Typography>

        <Typography
          variant="caption"
          component={'p'}
          sx={{
            color: '#fff',
          }}
        >
          Queda prohibida la total reproducción, modificación, transmisión o distribución de los
          datos publicados en este sitio web sin la autorización previa por escrito de Wit Capital
          y/o del proveedor de los mismos. Todos los derechos de propiedad intelectual están
          reservados a los proveedores y/o bolsa responsable de dichos los datos.
        </Typography>

        <Typography
          variant="caption"
          component={'p'}
          sx={{
            color: '#fff',
          }}
        >
          Notas: · Los datos publicados con respecto al dolar y otras divisas, son datos de
          referencia solamente. · Los logotipos utilizados, pertenecen exclusivamente a sus dueños.
        </Typography>
      </m.div>
    </Stack>
  );

  return (
    <Box
      sx={{
        bgcolor: 'background.dark',
      }}
    >
      <Container
        component={MotionViewport}
        sx={{
          py: { xs: 5, md: 5 },
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
