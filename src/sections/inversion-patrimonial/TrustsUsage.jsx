import { Box, Card, CardContent, Container, Grid, Stack, Typography } from '@mui/material';

import AccountTreeIcon from "@mui/icons-material/AccountTree"; // estructura familiar / herencia
import DescriptionIcon from "@mui/icons-material/Description"; // testamento / documentos
import TimelineIcon from "@mui/icons-material/Timeline"; // planificación a futuro

const benefits = [
  {
    title: 'Protección de activos',
    description: 'Brinda protección legal frente a posibles litigios y garantiza el resguardo del patrimonio familiar o empresarial a largo plazo.',
    icon: <AccountTreeIcon />
  },
  {
    title: 'Planificación sucesoria',
    description: 'Establece con claridad el reparto de bienes, evitando procesos testamentarios prolongados.',
    icon: <DescriptionIcon />
  },
  {
    title: 'Eficiencia administrativa y fiscal',
    description: 'Optimiza la gestión de activos y mejora la eficiencia fiscal aprovechando tratados internacionales.',
    icon: <TimelineIcon />
  }
];

export default function TrustsUsage() {
  return (
    <Box
      component="section"
      role="region"
      aria-label="Uso de Trusts en inversión inmobiliaria"
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
          Uso de Trusts en la{' '}
          <Box component="span" sx={{ color: 'primary.main' }}>
            inversión inmobiliaria
          </Box>
        </Typography>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Stack spacing={1.5}>
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  variant="outlined"
                  sx={{
                    borderRadius: 4,
                    p: 2.5
                  }}
                >
                  <CardContent sx={{ p: 0 }}>
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
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Box
                component="img"
                src="/assets/illustrations/P_INVERSION_PATRIMONIAL/P_INVERSION_PATRIMONIAL_03.png"
                alt="Persona presentando maqueta y activos inmobiliarios"
                decoding="async"
                sx={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  maxWidth: 540
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}