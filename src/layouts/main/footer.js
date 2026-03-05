// @mui
import Box from '@mui/material/Box';
import { paths } from 'src/routes/paths';

import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
// routes
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const LINKS = [
  {
    children: [
      { name: 'Home', href: '/' },
      { name: 'Áreas de prácticas', href: paths.business },
      { name: 'Quienes somos', href: paths.about },
    ],
  },
  {
    headline: 'Personal',
    children: [
      { name: 'Private Trust', href: paths.privateTrust },
      { name: 'Inversión patrimonial', href: paths.inversionPatrimonial },
      { name: 'Mercado de divisas', href: paths.fxTrading },
      { name: 'Divisas & Stablecoins', href: paths.cashPassport },
    ],
  },
  {
    headline: 'Empresariales',
    children: [
      { name: 'Pagos nacionales', href: paths.paymentsN },
      { name: 'Pagos Internacionales', href: paths.paymentsG },
      { name: 'Nearshore & Offshore', href: paths.nearshoringandoffshore },
      { name: 'Divisas & Stablecoins', href: paths.divisas },
    ],
  },
];

// ----------------------------------------------------------------------

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: 'background.dark',
      }}
    >
      <Container
        sx={{
          py: { xs: 6, md: 8 },
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-end' },
        }}
      >
        <Grid
          container
          columnSpacing={{ xs: 4, md: 8 }}
          rowSpacing={{ xs: 4, md: 0 }}
          sx={{ width: { xs: '100%', md: 'auto' } }}
        >
          {LINKS.map((list) => (
            <Grid key={list.headline || 'general'} xs={12} sm={4}>
              <Stack spacing={1.25} alignItems={{ xs: 'center', md: 'flex-start' }}>
                {list.headline && (
                  <Typography
                    component="div"
                    sx={{
                      fontFamily: '"DM Sans", Helvetica, Arial, sans-serif',
                      fontWeight: 500,
                      fontSize: '28px',
                      lineHeight: 1.05,
                      color: 'common.white',
                      mb: 0.5,
                    }}
                  >
                    {list.headline}
                  </Typography>
                )}

                {list.children.map((link) => (
                  <Link
                    key={link.name}
                    component={RouterLink}
                    href={link.href}
                    sx={{
                      fontFamily: '"DM Sans", Helvetica, Arial, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: 1.4,
                      color: 'common.white',
                      textDecoration: 'none',
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
