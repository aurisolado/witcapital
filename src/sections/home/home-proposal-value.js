import { m } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// hooks
import { useResponsive } from 'src/hooks/use-responsive';
// routes
// components
import { Box } from '@mui/material';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

const SUMMARY = [
  {
    index: 1,
    title: 'Objetivos claros',
    description:
      'Establecemos objetivos claros y los cumplimos a través de una metodología de trabajo que es eficiente desde la perspectiva de honorarios. Somos sensibles a las necesidades de nuestros clientes y nos anticipamos a las necesidades de sus negocios mitigando los riesgos presentes y futuros.',
    icon: 'solar:verified-check-bold',
  },
  {
    index: 2,
    title: 'Servicios de vanguardia',
    description:
      'Proporcionamos servicios de alta calidad, consistencia y rentabilidad, contando con un equipo de trabajo experimentado, en un ambiente de honestidad, colaboración y tecnología de vanguardia, que pueda garantizar seguridad para nuestros clientes y el crecimiento continuo de nuestra cartera.',
    icon: 'solar:clock-circle-bold',
  },
  {
    index: 3,
    title: 'Estamos regulados y capacitados',
    description:
      'Como una entidad regulada por la CNBV, estamos bajo su supervisión y en conformidad con la Ley del Mercado de Valores y las Disposiciones de Carácter General emitidas por la misma comisión.',
    icon: 'solar:shield-check-bold',
  },
];

export default function HomeProposalValue() {
  const mdUp = useResponsive('up', 'md');

  const renderBtn = (
    <Box
      gap={5}
      display="grid"
      gridTemplateColumns={{
        xs: 'repeat(1, 1fr)',
        md: 'repeat(3, 1fr)',
      }}
      sx={{
        mt: { xs: 5, md: 10 },
      }}
    >
      {SUMMARY.map((item) => (
        <Box
          key={item.title}
          sx={{
            borderRadius: '16px',
            background: '#163300',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'start',
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, mt: 1, color: '#9fe870', minHeight: '100px' }}>
            {item.title}
          </Typography>

          <Typography variant="body1" sx={{ color: '#fff', textAlign: 'justify' }}>
            {item.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  const renderDescription = (
    <Stack
      sx={{
        textAlign: {
          xs: 'center',
          md: 'center',
        },
      }}
    >
      <m.div variants={varFade().inDown}>
        <Typography
          variant="h2"
          sx={{
            color: '#1c3108',
          }}
        >
          Nuestra oferta de valor
        </Typography>
      </m.div>

      {mdUp && <m.div variants={varFade().inDown}> {renderBtn} </m.div>}
    </Stack>
  );

  return (
    <Box
      sx={{
        bgcolor: '#9fe870',
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
          <Grid xs={12} md={12}>
            {renderDescription}
          </Grid>

          {!mdUp && (
            <Grid xs={12} sx={{ textAlign: 'center' }}>
              {renderBtn}
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
