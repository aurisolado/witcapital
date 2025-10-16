import { Container, Grid, Box, Typography, Card, CardContent, Stack, Paper } from '@mui/material';


export default function Compromiso() {
  return (
    <Box
      component="section"
      role="region"
      aria-label="Beneficios del Mercado de Divisas"
      sx={{
        bgcolor: 'background.default',
        py: { xs: 6, md: 10 }
      }}
    >
      <Container maxWidth="lg">

          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              mb: { xs: 4, md: 6 },
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textWrap: 'balance'
            }}
          >
            Compromiso con la regulación y transparencia
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: '46ch',
              mx: 'auto',
              lineHeight: 1.6,
              color: 'text.secondary'
            }}
          >
            Operamos bajo el marco de las autoridades financieras competentes, cumpliendo los requisitos legales de México y de los mercados internacionales. Garantizamos:
          </Typography>

          
      </Container>
    </Box>
  );
}