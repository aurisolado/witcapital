import { m } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// hooks
// routes
// components
import { Box } from '@mui/material';
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
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="h4" color="#163300">
            <Box component="span" sx={{ color: "primary.main" }}>
              Compromiso
            </Box>
            {" "}con nuestros clientes

          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="body1" color="#163300">
            En Wit Biz, acompañamos el crecimiento de personas y empresas a nivel local e internacional, mediante estrategias personalizadas basadas en profesionalismo, transparencia y eficacia. Contáctanos para conocer cómo podemos fortalecer tu patrimonio o tu negocio con soluciones confiables y de alto valor estratégico
          </Typography>
        </m.div>


      </Stack>
    </Container>
  );
}
