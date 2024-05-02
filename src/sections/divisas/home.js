import { m } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// components
import { Grid } from '@mui/material';
import { MotionViewport, varFade } from 'src/components/animate';
import Image from 'src/components/image';

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <Container
      component={MotionViewport}
      sx={{
        py: { xs: 10, md: 15 },
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 0, md: 0 }}>
        <Grid xs={12} md={9}>
          <Stack
            sx={{
              textAlign: {
                xs: 'center',
                md: 'left',
              },
            }}
          >
            <m.div variants={varFade().inDown}>
              <Typography variant="h2" color="#212B36">
                Soluciones especializadas en el mercado de divisas
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 3,
                  mb: { md: 5 },
                }}
                color="#212B36"
              >
                En Wit Biz asesoramos a nuestros clientes en la compra, venta y pagos en divisas,
                buscando una solucion a sus necesidades, a través de nuestras relaciones de
                corresponsalía con las principales instituciones financieras nacionales e
                internaciónales.
              </Typography>
            </m.div>
          </Stack>
        </Grid>

        <Grid xs={12} md={3} align="center">
          <m.div variants={varFade().inUp}>
            <Image
              disabledEffect
              alt="rocket"
              src="https://cdn.plus500.com/Media/ArticlesMain/Gold_Bricks_Chart@0,75x.png"
            />
          </m.div>
        </Grid>
      </Grid>
    </Container>
  );
}
