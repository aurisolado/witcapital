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
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography variant="h1" color="#212B36">
              Transmisor de dinero
            </Typography>
          </m.div>

          <m.div variants={varFade().inDown}>
            <Typography variant="body1" color="#212B36">
              REGÍSTRATE AHORA Y CONSIGUE ACCESO PRIORITARIO EXCLUSIVO
            </Typography>
          </m.div>
        </Stack>
      </Container>
    </Box>
  );
}
