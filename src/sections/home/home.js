import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { MotionViewport, varFade } from 'src/components/animate';
import { Button } from '@mui/material';

// ----------------------------------------------------------------------

const CARDS = [
  {
    icon: ' /assets/icons/home/ic_make_brand.svg',
    title: 'Branding',
    description: 'Consistent design makes it easy to brand your own.',
  },
  {
    icon: ' /assets/icons/home/ic_design.svg',
    title: 'UI & UX Design',
    description:
      'The kit is built on the principles of the atomic design system. It helps you to create projects fastest and easily customized packages for your projects.',
  },
  {
    icon: ' /assets/icons/home/ic_development.svg',
    title: 'Development',
    description: 'Easy to customize and extend, saving you time and money.',
  },
];

// ----------------------------------------------------------------------

export default function Home() {
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
          <Typography variant="h1">Asesoría de vanguardia, con visión de negocios.</Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Typography variant="body1">
            Gracias a nuestro sofisticado y experimentado grupo multidisciplinario y a nuestro muy
            particular acercamiento estratégico de negocios, hemos sido capaces de ayudar a nuestros
            clientes, abordando cada transacción con soluciones hechas “a la medida” y con
            extraordinarios resultados, ya que asumimos sus asuntos como propios, buscando siempre
            soluciones legales prácticas, efectivas, innovadoras, creativas y exitosas.
          </Typography>
        </m.div>

        <m.div variants={varFade().inDown}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            href="mailto:support@minimals.cc?subject=[Feedback] from Customer"
          >
            Áreas de práctica
          </Button>
        </m.div>
      </Stack>

      <Box gap={{ xs: 3, lg: 7 }} display="grid" alignItems="center">
        <m.div variants={varFade().inDown}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
            }}
          >
            <source
              src="https://wise.com/static-assets/app/_next/static/media/3d-globe-72a5cb0edcbe31cf385aa34558b1c435.webm"
              type="video/webm; codecs=av01.0.12M.08.0.110.01.01.01.0"
            />
            <source
              src="https://wise.com/static-assets/app/_next/static/media/3d-globe-cfe618f7f706583422789cd9773a062a.mp4"
              type="video/mp4"
            />
          </video>
        </m.div>
      </Box>
    </Container>
  );
}
