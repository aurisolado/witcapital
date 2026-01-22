import { Container, Grid, Box, Typography, Card, CardContent, Stack, Paper } from '@mui/material';

const benefits = [
  {
    title: 'Reducción de Costos',
    description: 'Al minimizar intermediarios y optimizar la gestión de pagos, se reducen comisiones y tarifas',
    icon: '🔑'
  },
  {
    title: 'Seguridad y Trazabilidad',
    description: 'La tecnología blockchain ofrece cifrado de alto nivel y registros inalterables',
    icon: '📊'
  },
  {
    title: 'Eficiencia Operativa',
    description: 'Agiliza la administración de cobros y pagos globales, reduciendo tiempos de procesamiento',
    icon: '📈'
  },
  {
    title: 'Menor Volatilidad',
    description: 'Las stablecoins presentan fluctuaciones más bajas que otras criptomonedas, ideales para transacciones diarias',
    icon: '📈'
  },
  {
    title: 'Acceso a nuevos mercados',
    description: 'Atrae a clientes que buscan métodos de pago digitales estables y confiables',
    icon: '📈'
  }
];

export default function Fundamentos() {
  return (
    <Box
      component="section"
      role="region"
      aria-label="Estados Unidos paso financiero"
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
            Fundamentos de nuestra cultura
          </Typography>

         

          <Grid container spacing={3}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Card
                  variant="outlined"
                  sx={{
                    borderRadius: 1,
                    p: 2.5,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <CardContent sx={{ p: 0, flexGrow: 1 }}>
                    <Stack spacing={2} alignItems="center" textAlign="center">
                      <Box sx={{ fontSize: 32 }}>
                        {benefit.icon}
                      </Box>
                      
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          mb: 1
                        }}
                      >
                        {benefit.title}
                      </Typography>
                      
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6
                        }}
                      >
                        {benefit.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

      </Container>
    </Box>
  );
}