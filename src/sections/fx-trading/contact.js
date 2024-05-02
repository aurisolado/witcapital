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
            Permítenos ser tu asesor en inversiones.
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Button
            size="large"
            variant="contained"
            target="_blank"
            href="https://www.revolut.com/gettheapp/?af_channel=website_direct&af_force_deeplink=true&af_sub1=%7B%22conversion_page_url%22%3A%22https%3A%2F%2Fwww.revolut.com%2Fes-MX%2F%22%2C%22cookie_consent%22%3A%5B%22ads%22%2C%22analytics%22%5D%2C%22landing_page_url%22%3A%22https%3A%2F%2Fwww.revolut.com%2Fes-MX%2F%22%2C%22qr_code%22%3Afalse%7D&pid=website"
          >
            regístrate ahora y consigue acceso prioritario exclusivo
          </Button>
        </m.div>
      </Stack>
    </Container>
  );
}
