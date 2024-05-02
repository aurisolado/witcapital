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
        }}
      >
        <m.div variants={varFade().inDown}>
          <Typography variant="h2" color="#163300">
            Transmisor de dinero
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Button
            size="large"
            variant="contained"
            target="_blank"
            href="https://calendly.com/witbiz"
          >
            Programación de citas
          </Button>
        </m.div>
      </Stack>
    </Container>
  );
}
