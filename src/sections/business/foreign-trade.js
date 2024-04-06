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

export default function ForeignTrade() {
  const mdUp = useResponsive('up', 'md');

  return (
    <Box
      sx={{
        bgcolor: '#ffffff',
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
          sx={{ marginBottom: 20 }}
        >
          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/web-art/assets/illustrations/key-medium@1x.webp"
              />
            </m.div>
          </Grid>

          <Grid xs={12} md={6}>
            <Stack
              sx={{
                textAlign: {
                  xs: 'center',
                  md: 'left',
                },
              }}
            >
              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h2"
                  sx={{
                    mt: 3,
                    mb: { md: 3 },
                  }}
                >
                  Comercio Exterior y Aduanas
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 3 },
                  }}
                >
                  Nuestro equipo multidisciplinario tiene experiencia desempeñándose tanto en el
                  sector público, como en la práctica privada, y adicionalmente experiencia
                  profesional en la sede de la Organización Mundial de Comercio (OMC) en Ginebra,
                  brindando asesoría jurídica en los paneles que resuelven controversias en materia
                  de comercio exterior. 
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 3 },
                  }}
                >
                  Derivado de lo anterior, nuestro equipo conoce la legislación doméstica en materia
                  de comercio exterior y las fuentes de derecho internacional aplicables en la
                  materia, incluyendo los tratados de libre comercio (TLC) y los acuerdos de la OMC
                  suscritos por México. Esto nos permite tener una visión exhaustiva y panorámica
                  para asistir con una mayor calidad a nuestros clientes.
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 3 },
                  }}
                >
                  Apoyados en las otras áreas de práctica del despacho, proporcionamos a nuestros
                  clientes internacionales asesoría para establecerse exitosamente en el mercado
                  mexicano, ya que México se encuentra en una posición única en el contexto de la
                  tendencia global reciente de nearshoring, debido a su ubicación geográfica y red
                  de tratados comerciales, por lo que se ha consolidado como un destino de inversión
                  en creciente expansión.
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="h5"
                  sx={{
                    mt: 3,
                    mb: { md: 3 },
                  }}
                >
                  Lo que hace único a nuestro equipo profesional es el dominio de esta práctica
                  desde la perspectiva doméstica, regional e internacional.
                </Typography>
              </m.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
