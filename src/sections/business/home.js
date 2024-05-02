import { m } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// components
import { Box, Grid } from '@mui/material';
import { MotionViewport, varFade } from 'src/components/animate';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function Home() {
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
        <Stack
          spacing={3}
          sx={{
            textAlign: 'center',
            mb: { xs: 5, md: 10 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h1" color="#212B36">
              Áreas de Práctica
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="body1" color="#212B36">
              Hemos integrado nuestra firma con un grupo multidisciplinario de abogados que posee
              experiencia diversa y profundo conocimiento de sus áreas de práctica, lo que nos
              permite superar las expectativas de nuestros clientes, mediante la implementación de
              soluciones legales y de negocios integrales, innovadoras y efectivas.
            </Typography>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}
