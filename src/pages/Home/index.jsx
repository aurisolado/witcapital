import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PersonaServices from './sections/PersonaServices';
import EmpresaServices from './sections/EmpresaServices';
import { paths } from 'src/routes/paths';

export default function Home() {
  return (
    <Box sx={{ overflow: 'hidden', position: 'relative' }}>
      <Box
        component="section"
        sx={{
          bgcolor: 'background.default',
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 4, md: 0 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1.15fr' },
              minHeight: { xs: 'auto', md: 640 },
            }}
          >
            <Box
              sx={{
                pr: { xs: 0, md: 4 },
                py: { xs: 5, md: 0 },
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box sx={{ maxWidth: 480 }}>
                <Typography variant="h1" sx={{ color: 'text.primary' }}>
                  Tu{' '}
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    crecimiento
                  </Box>{' '}
                  <br />
                  es nuestro <br />
                  <Box component="span" sx={{ color: 'primary.main' }}>
                    compromiso
                  </Box>
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 4,
                    color: 'text.secondary',
                    maxWidth: 420,
                  }}
                >
                  Soluciones financieras confiables e innovadoras para personas y empresas que miran
                  hacia el futuro
                </Typography>

                <Button
                  variant="contained"
                  href={paths.contact}
                  sx={{
                    mt: 6,
                    borderRadius: '40px',
                    bgcolor: 'primary.main',
                    color: 'common.white',
                    px: { xs: 4, md: '52px' },
                    py: { xs: '12px', md: '14px' },
                    fontFamily: '"DM Sans", Helvetica, Arial, sans-serif',
                    fontSize: '16px',
                    fontWeight: 900,
                    '&:hover': {
                      bgcolor: 'primary.light',
                    },
                  }}
                >
                  AGENDA UNA CITA
                </Button>
              </Box>
            </Box>

            <Box sx={{ bgcolor: 'background.hero', minHeight: { xs: 340, md: 'auto' } }}>
              <Box
                component="img"
                src="/assets/illustrations/HOME/HOME_01.png"
                alt="Mapa y conexiones de divisas"
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: { xs: 340, md: 640 },
                  objectFit: 'cover',
                  objectPosition: 'center',
                  display: 'block',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'background.section' }}>
        <Container maxWidth="lg" sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 4, md: 5 } }}>
          <Typography variant="h2" align="center" sx={{ mb: 2, color: 'text.primary' }}>
            Transformamos{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              soluciones en resultados
            </Box>
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: 'text.secondary', fontSize: '18px', maxWidth: 900, mx: 'auto' }}
          >
            En Wit Biz dividimos nuestros servicios en dos categorías principales, diseñadas para
            acompañarte en cada etapa de tu vida y negocio
          </Typography>
        </Container>
      </Box>

      <PersonaServices />
      <EmpresaServices />

      <Box component="section" sx={{ bgcolor: '#ffffff' }}>
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
          <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box
                component="img"
                src="/assets/illustrations/HOME/HOME_10.png"
                alt="Crecimiento inteligente"
                sx={{
                  width: '100%',
                  maxWidth: 680,
                  display: 'block',
                }}
              />
            </Grid>

            <Grid item xs={12} md={5}>
              <Typography variant="h2" sx={{ color: 'text.primary', mb: 3 }}>
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Crecimiento
                </Box>{' '}
                <br />
                inteligente
              </Typography>

              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                En Wit Biz ofrecemos un servicio financiero integral diseñado para diversificar tu
                patrimonio o fortalecer tu empresa, combinando innovación tecnológica, experiencia
                internacional y soluciones personalizadas.
              </Typography>

              <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                Nuestro equipo domina los marcos regulatorios de México y EE. UU., mientras nuestras
                plataformas seguras y automatizadas optimizan procesos, reducen costos y te brindan
                acompañamiento continuo para impulsar tu crecimiento.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
