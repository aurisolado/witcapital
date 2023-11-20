import { m } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
// routes
// components
import { Box, Button } from '@mui/material';
import { MotionViewport, varFade } from 'src/components/animate';

export default function Contact() {
  return (
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
          <Typography variant="h2" color="#9fe870">
            Permítenos ser tus asesores de confianza
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="body1" color="#ffffff">
            Proveemos servicios integrales de vanguardia, con visión interdisciplinaria centrada en
            brindar soluciones que tienen como centro el apoyar los objetivos de nuestros clientes.
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            href="mailto:mail@mail.mx?subject=[Feedback] from Customer"
          >
            Programación de citas
          </Button>
        </m.div>
      </Stack>
    </Container>
  );
}
