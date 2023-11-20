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

export default function InternationalConsulting() {
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
                  Consultoría Internacional
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
                  Planifique sus compañías offshore y su operativa bancaria internacional
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
                  Las sociedades offshore se acogen a regulaciones legales y fiscales muy
                  favorables. Conozca la jurisdicción que mejor se adapte a sus necesidades y déjese
                  recomendar por nuestro grupo multidisciplinario de abogados.
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
                  Una cuenta offshore es una cuenta bancaria ubicada en una de las muchas entidades
                  bancarias situadas fuera del país de residencia del titular de la cuenta.
                </Typography>
              </m.div>

              <m.div variants={varFade().inDown}>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'center',
                    mb: { md: 2 },
                  }}
                >
                  “Entendemos a las empresas de e-commerce.”
                </Typography>
              </m.div>
              <m.div variants={varFade().inDown}>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'center',
                    mb: { md: 5 },
                  }}
                >
                  “Diseña el futuro, actúa en el presente”
                </Typography>
              </m.div>
            </Stack>
          </Grid>

          <Grid xs={12} md={6} align="center">
            <m.div variants={varFade().inUp}>
              <Image
                disabledEffect
                alt="rocket"
                src="https://wise.com/swift-codes-assets/img/magnifying-glass.webp"
              />
            </m.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
