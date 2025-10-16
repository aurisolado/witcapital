import { Container, Grid, Box, Typography, Card, CardContent, Stack } from '@mui/material';

const taxBenefits = [
  {
    title: 'Tratados internacionales',
    description: 'Optimiza la carga fiscal mediante el aprovechamiento de tratados bilaterales y convenios de doble imposición.',
    icon: '🌍'
  },
  {
    title: 'Estructuras exentas',
    description: 'Algunos Trusts califican como entidades libres de impuestos en Estados Unidos o disfrutan de tratamientos preferenciales.',
    icon: '🔒'
  },
  {
    title: 'Trusts irrevocables',
    description: 'Al transferir los bienes, se considera una enajenación que puede reducir o eliminar obligaciones fiscales al salir del patrimonio personal del Settlor.',
    icon: '💼'
  }
];

export default function TaxOptimization() {
  return (
    <Box
      component="section"
      role="region"
      aria-label="Optimización fiscal del Private Trust"
      sx={{
        bgcolor: 'background.paper',
        py: { xs: 6, md: 10 }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={3}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  textWrap: 'balance'
                }}
              >
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Optimización
                </Box>{' '}
                fiscal
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.6,
                  fontSize: '1.125rem',
                  mb: 2
                }}
              >
                Dependiendo del tipo y naturaleza del Trust, puede lograrse eficiencia fiscal en México y Estados Unidos, siempre cumpliendo los requisitos legales.
              </Typography>

              <Stack spacing={1.5}>
                {taxBenefits.map((benefit, index) => {
                  return (
                    <Card
                      key={index}
                      variant="outlined"
                      sx={{
                        borderRadius: 4,
                        p: 2.5,
                        border: '1px solid',
                        borderColor: 'divider'
                      }}
                    >
                      <CardContent sx={{ p: 0, '&:last-child': { pb: 0 } }}>
                        <Stack direction="row" spacing={2} alignItems="flex-start">
                          <Box
                            sx={{
                              fontSize: 24,
                              mt: 0.5,
                              flexShrink: 0
                            }}
                          >
                            {benefit.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 600,
                                mb: 1,
                                fontSize: '1rem'
                              }}
                            >
                              {benefit.title}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.secondary',
                                lineHeight: 1.5
                              }}
                            >
                              {benefit.description}
                            </Typography>
                          </Box>
                        </Stack>
                      </CardContent>
                    </Card>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                py: { xs: 2, md: 0 }
              }}
            >
              <Box
                component="img"
                src="/assets/illustrations/PRIVATE_TRUST/P_PRIVATE_TRUST_02.png"
                alt="Balanza con bolsas de dinero y etiqueta TAX"
                decoding="async"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  maxWidth: { xs: 400, md: 600 }
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}