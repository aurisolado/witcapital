import { m } from 'framer-motion';
import { Container, Box, Typography } from '@mui/material';
import { MotionViewport, varFade } from 'src/components/animate';

export default function ServicesIntro() {
  return (
    <Container component={MotionViewport} maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Box textAlign="center">
        <m.div variants={varFade().inUp}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Transformamos soluciones en resultados
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto' }}>
            Servicios especializados para personas y empresas con el respaldo de una entidad regulada por la CNBV.
          </Typography>
        </m.div>
      </Box>
    </Container>
  );
}