'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const cards = [
  {
    imageSrc: '/assets/illustrations/E_PAGOS_INTERNACIONALES/E_PAGOS INTERNACIONALES_01.png',
    title: 'Eficiencia y seguridad',
    description:
      'Empleamos tecnología de vanguardia, cifrado avanzado y protocolos de seguridad alineados con la CNBV y estándares internacionales como SWIFT gpi, garantizando protección total en cada envío y recepción de fondos',
  },
  {
    imageSrc: '/assets/illustrations/E_PAGOS_INTERNACIONALES/E_PAGOS INTERNACIONALES_02.png',
    title: 'Cambio competitivo',
    description:
      'Ofrecemos tarifas transparentes y tasas de cambio favorables, maximizando el valor de cada transacción y alineándonos con las recomendaciones del Banco Mundial para reducir costos y aumentar la competitividad',
  },
  {
    imageSrc: '/assets/illustrations/E_PAGOS_INTERNACIONALES/E_PAGOS INTERNACIONALES_03.png',
    title: 'Cobertura global',
    description:
      'Contamos con amplio alcance en los principales mercados de Europa, Asia y América, ofreciendo acceso seguro a múltiples monedas y regiones',
  },
];

export default function GlobalPaymentView() {
  return (
    <Box sx={{ bgcolor: '#ffffff' }}>
      {/* ── HERO SECTION ── */}
      <Box sx={{ bgcolor: '#f5f7fa', py: { xs: 7, md: 10 } }}>
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            spacing={{ xs: 5, md: 8 }}
          >
            {/* Left — text */}
            <Box sx={{ flex: 1, maxWidth: { md: 700 } }}>
              <Typography
                component="h1"
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: { xs: 36, md: 63 },
                  fontWeight: 900,
                  lineHeight: 1.1,
                  color: '#0b0e27',
                  mb: 4,
                }}
              >
                Pagos Internacionales
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: '#1a202c',
                  maxWidth: 620,
                }}
              >
                En Wit Biz, proporcionamos soluciones financieras internacionales confiables para
                empresas mexicanas que buscan consolidar su presencia global. Contamos con registro y
                autorización como transmisor de dinero ante la CNBV, cumpliendo con la Ley General de
                Organizaciones y Actividades Auxiliares del Crédito y los más altos estándares de
                transparencia
              </Typography>
            </Box>

            {/* Right — illustration */}
            <Box
              sx={{
                flexShrink: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src="/assets/illustrations/E_PAGOS_INTERNACIONALES/E_PAGOS INTERNACIONALES_03.png"
                alt="Pagos Internacionales"
                sx={{
                  width: { xs: 200, md: 234 },
                  height: 'auto',
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* ── TRANSFERENCIAS SECTION ── */}
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        {/* Centered heading + subtitle */}
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: { xs: 28, md: 40 },
              fontWeight: 700,
              lineHeight: 1.2,
              color: '#0b0e27',
              mb: 3,
            }}
          >
            Transferencias internacionales rápidas y seguras
          </Typography>

          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.75,
              color: '#1a202c',
              maxWidth: 760,
              mx: 'auto',
            }}
          >
            Conectamos a tu empresa con aliados, proveedores y clientes en más de 100 países,
            permitiéndote competir y fortalecer tu presencia en el mercado mundial
          </Typography>
        </Box>

        {/* 3 Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 4, md: 4 },
          }}
        >
          {cards.map((card) => (
            <Box key={card.title}>
              {/* Image container */}
              <Box
                sx={{
                  borderRadius: '22px',
                  border: '1px solid #e3e8ef',
                  bgcolor: '#f5f7fa',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 3,
                  minHeight: { xs: 240, md: 320 },
                }}
              >
                <Box
                  component="img"
                  src={card.imageSrc}
                  alt={card.title}
                  sx={{
                    width: '100%',
                    maxWidth: 339,
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </Box>

              {/* Card title */}
              <Typography
                sx={{
                  mt: 2.5,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 21,
                  fontWeight: 600,
                  color: '#000000',
                }}
              >
                {card.title}
              </Typography>

              {/* Card body */}
              <Typography
                sx={{
                  mt: 1.5,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: '#1a202c',
                }}
              >
                {card.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* ── FOOTER TEXT BAR ── */}
      <Container maxWidth="xl" sx={{ pb: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            bgcolor: '#f5f7fa',
            borderRadius: '22px',
            py: { xs: 5, md: 7 },
            px: { xs: 3, md: 8 },
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.75,
              color: '#1a202c',
              maxWidth: 900,
              mx: 'auto',
            }}
          >
            Con Pagos Internacionales de Wit Biz, tu negocio contará con un aliado sólido, confiable
            y ágil para gestionar sus operaciones globales y traspasar fronteras
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
