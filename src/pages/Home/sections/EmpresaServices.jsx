import { paths } from 'src/routes/paths';

import { Box, Container, Grid, Link, Typography } from '@mui/material';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import { MotionViewport } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';

const services = [
  {
    title: 'PAGOS\nNACIONALES',
    image: '/assets/illustrations/HOME/HOME_06.png',
    path: paths.paymentsN,
  },
  {
    title: 'PAGOS\nGLOBALES',
    image: '/assets/illustrations/HOME/HOME_07.png',
    path: paths.paymentsG,
  },
  {
    title: 'NEARSHORE &\nOFFSHORE',
    image: '/assets/illustrations/HOME/HOME_08.png',
    path: paths.nearshoringandoffshore,
  },
  {
    title: 'DIVISAS &\nSTABLECOINS',
    image: '/assets/illustrations/HOME/HOME_09.png',
    path: paths.divisas,
  },
];

export default function EmpresaServices() {
  return (
    <Box sx={{ bgcolor: 'background.section' }}>
      <Container
        component={MotionViewport}
        maxWidth="lg"
        sx={{ pt: { xs: 3, md: 5 }, pb: { xs: 9, md: 11 } }}
      >
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, mb: 3.5 }}>
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: '8px',
              bgcolor: 'background.neutral',
              border: (theme) => `1px solid ${theme.palette.background.borderSoft}`,
              color: '#80858e',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <BusinessCenterOutlinedIcon sx={{ fontSize: 18 }} />
          </Box>
          <Typography variant="h5" sx={{ color: 'text.primary' }}>
            Empresa
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Link
                component={RouterLink}
                href={service.path}
                underline="none"
                sx={{
                  display: 'block',
                  height: 365,
                  borderRadius: '22px',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 1px 2px rgba(11,14,39,0.06)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 16px 30px rgba(11,14,39,0.18)',
                  },
                  '&:hover .bg-image': {
                    transform: 'scale(1.06)',
                  },
                  '&:focus-visible': {
                    outline: (theme) => `2px solid ${theme.palette.primary.main}`,
                    outlineOffset: 2,
                  },
                }}
              >
                <Box
                  className="bg-image"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '115%',
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                    transition: 'transform 0.25s ease',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(to bottom, rgba(0,0,0,0) 48%, rgba(11,14,39,0.88) 100%)',
                    zIndex: 1,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 24,
                    left: 20,
                    right: 20,
                    zIndex: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: '"DM Sans", Helvetica, Arial, sans-serif',
                      fontSize: '21px',
                      fontWeight: 600,
                      lineHeight: 1.22,
                      whiteSpace: 'pre-line',
                      letterSpacing: '1px',
                      color: 'common.white',
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
