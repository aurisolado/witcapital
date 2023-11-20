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

export default function BankingFinance() {
  const mdUp = useResponsive('up', 'md');

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
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 5, md: 0 }}
        >
          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/web-art/assets/illustrations/gear-medium@1x.webp"
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
                  variant="h3"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Bancario y Financiero
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Wit Capital maximiza la generación de valor a través de una combinación
                  estratégica de experiencia y un profundo entendimiento de los negocios de nuestros
                  clientes.
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="body1"
                  sx={{
                    mt: 3,
                    mb: { md: 5 },
                  }}
                >
                  Los socios de esta Práctica proporcionan asesoría regulatoria y transaccional a
                  bancos, Instituciones de Tecnología Financiera (Fintech), sociedades financieras
                  de objeto múltiple (SOFOMS), fideicomisos de inversión en bienes raíces (FIBRAs),
                  fideicomisos públicos (CKDs), compañías aseguradoras, empresas de corretaje
                  interbancario y administradoras de fondos de ahorro para el retiro (AFORES), entre
                  otras.
                </Typography>
              </m.div>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
