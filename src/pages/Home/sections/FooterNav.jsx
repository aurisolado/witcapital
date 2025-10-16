import { Container, Grid, Typography, List, ListItemButton, ListItemText } from '@mui/material';

const personalLinks = [
  'Private Trust',
  'Inversión patrimonial', 
  'Mercado de divisas',
  'Asesoría financiera'
];

const empresarialLinks = [
  'Pagos nacionales',
  'Pagos globales',
  'Nearshore & Offshore',
  'Divisas & Stablecoins'
];

export default function FooterNav() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Personal
          </Typography>
          <List>
            {personalLinks.map((link, index) => (
              <ListItemButton key={index} sx={{ pl: 0 }}>
                <ListItemText primary={link} />
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Empresariales
          </Typography>
          <List>
            {empresarialLinks.map((link, index) => (
              <ListItemButton key={index} sx={{ pl: 0 }}>
                <ListItemText primary={link} />
              </ListItemButton>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}