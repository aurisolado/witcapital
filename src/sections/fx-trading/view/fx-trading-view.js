'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import BarChartIcon from '@mui/icons-material/BarChart';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SchoolIcon from '@mui/icons-material/School';
import ShieldIcon from '@mui/icons-material/Shield';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

function Accent({ children }) {
  return (
    <Box
      component="span"
      sx={{
        position: 'relative',
        display: 'inline-block',
        '&::after': {
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -5,
          height: 4,
          bgcolor: 'primary.main',
          borderRadius: 99,
        },
      }}
    >
      {children}
    </Box>
  );
}

const beneficioCards = [
  {
    icon: <ShowChartIcon />,
    title: 'Alta liquidez',
    text: 'La alta participación en el mercado permite ejecutar operaciones rápidamente y aprovechar cambios inmediatos',
  },
  {
    icon: <AccessTimeIcon />,
    title: 'Disponible 24/7',
    text: 'Disponible 24/5, se adapta a todos los husos horarios y perfiles de inversión',
  },
  {
    icon: <CurrencyExchangeIcon />,
    title: 'Diversificación',
    text: 'Invertir en divisas diversifica tu portafolio y reduce riesgos geográficos.',
  },
  {
    icon: <BarChartIcon />,
    title: 'Apalancamiento',
    text: 'Puedes operar con apalancamiento, aumentando potencial de ganancia y riesgo',
  },
];

const asesoresCards = [
  {
    icon: <AnalyticsIcon />,
    title: 'Análisis Personalizado',
    text: 'Revisamos tu perfil de riesgo y objetivos financieros para definir la mejor estrategia de inversión',
  },
  {
    icon: <BarChartIcon />,
    title: 'Herramientas de vanguardia',
    text: 'Empleamos plataformas y metodologías de análisis técnico y fundamental para detectar oportunidades con mayor precisión',
  },
  {
    icon: <SchoolIcon />,
    title: 'Educación continua',
    text: 'Brindamos capacitaciones y reportes regulares para que tomes decisiones basadas en información sólida',
  },
];

const compromisoCards = [
  {
    icon: <ShieldIcon />,
    title: 'Seguridad y confianza',
    text: 'Tu información y transacciones se mantienen bajo estrictos protocolos de confidencialidad',
  },
  {
    icon: <VerifiedUserIcon />,
    title: 'Transparencia en comisiones y costos',
    text: 'Conoces de antemano las tarifas de tus operaciones, evitando cargos ocultos y facilitando un mejor control de tus inversiones',
  },
];

export default function FxTradingView() {
  return (
    <Box sx={{ bgcolor: '#ffffff' }}>
      {/* ── 1. HERO (white bg) ── */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ maxWidth: 500 }}>
            <Typography
              component="h1"
              sx={{
                color: '#0b0e27',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 900,
                fontSize: { xs: 32, md: 63 },
                lineHeight: 1.05,
                mb: 3,
              }}
            >
              Trading de
              <br />
              Divisas
            </Typography>

            <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75, mb: 2.5 }}>
              El mercado de divisas o Forex (Foreign Exchange) es el mercado financiero más grande
              y líquido del mundo, operando las 24 horas del día.
            </Typography>
            <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75, mb: 4 }}>
              Aquí se negocian diferentes monedas con un volumen diario que supera los billones de
              dólares, ofreciendo oportunidades de rentabilidad a corto, mediano y largo plazo
            </Typography>

            <Button
              variant="contained"
              size="large"
              href="/contacto"
              sx={{
                borderRadius: '40px',
                px: '52px',
                py: '25px',
                height: 'auto',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 900,
                fontSize: 16,
              }}
            >
              CONTÁCTANOS
            </Button>
          </Box>

          <Box
            component="img"
            src="/assets/illustrations/P_MERDADO_DE_DIVISAS/HERO.png"
            alt="Trading de Divisas"
            sx={{ width: '100%', maxWidth: 680, justifySelf: { xs: 'center', md: 'end' } }}
          />
        </Box>
      </Container>

      {/* ── 2. Beneficios del Mercado de Divisas (#f5f7fa bg) ── */}
      <Box sx={{ bgcolor: '#f5f7fa' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
          <Typography
            component="h2"
            sx={{
              color: '#0b0e27',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 700,
              fontSize: { xs: 24, md: 40 },
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            Beneficios del <Accent>Mercado de Divisas</Accent>
          </Typography>

          <Box
            sx={{
              mt: { xs: 4, md: 7 },
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
              gap: 3,
            }}
          >
            {beneficioCards.map((item) => (
              <Box
                key={item.title}
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '22px',
                  p: 3,
                  minHeight: 260,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '10px',
                    border: '1px solid #e3e8ef',
                    bgcolor: '#ffffff',
                    display: 'grid',
                    placeItems: 'center',
                    mb: 2,
                    '& svg': { fontSize: 24, color: '#6b7a33' },
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  sx={{ fontSize: 21, fontWeight: 600, color: '#0b0e27', lineHeight: 1.2 }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ mt: 1.5, color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── 3. Asesores en Inversiones (#f5f7fa bg) ── */}
      <Box sx={{ bgcolor: '#f5f7fa' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 880, mx: 'auto' }}>
            <Typography
              component="h2"
              sx={{
                color: '#0b0e27',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 700,
                fontSize: { xs: 24, md: 40 },
                lineHeight: 1.1,
              }}
            >
              Asesores en <Accent>Inversiones</Accent>
            </Typography>
            <Typography sx={{ color: '#1a202c', fontSize: 18, lineHeight: 1.75 }}>
              En Wit Biz, contamos con un equipo especializado en Forex que combina experiencia,
              conocimiento técnico y visión estratégica del entorno global. Te ofrecemos:
            </Typography>
          </Stack>

          <Box
            sx={{
              mt: { xs: 4, md: 7 },
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {asesoresCards.map((item) => (
              <Box
                key={item.title}
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '22px',
                  border: '1px solid #e3e8ef',
                  boxShadow: '0 8px 18px rgba(12, 18, 40, 0.06)',
                  p: 3,
                  minHeight: 280,
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '10px',
                    bgcolor: 'primary.main',
                    display: 'grid',
                    placeItems: 'center',
                    mb: 2,
                    '& svg': { fontSize: 24, color: '#424e1f' },
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  sx={{ fontSize: 28, lineHeight: 1.2, color: '#0b0e27', fontWeight: 600 }}
                >
                  {item.title}
                </Typography>
                <Typography sx={{ mt: 1.25, color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── 4. Compromiso con la regulación (#f5f7fa bg) ── */}
      <Box sx={{ bgcolor: '#f5f7fa' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 880, mx: 'auto' }}>
            <Typography
              component="h2"
              sx={{
                color: '#0b0e27',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 700,
                fontSize: { xs: 24, md: 40 },
                lineHeight: 1.1,
              }}
            >
              Compromiso con la
              <br />
              <Accent>regulación y transparencia</Accent>
            </Typography>
            <Typography sx={{ color: '#1a202c', fontSize: 18, lineHeight: 1.75 }}>
              Operamos bajo el marco de las autoridades financieras competentes, cumpliendo los
              requisitos legales de México y de los mercados internacionales. Garantizamos:
            </Typography>
          </Stack>

          {/* White container with 2 inner #f5f7fa cards */}
          <Box
            sx={{
              mt: { xs: 4, md: 7 },
              bgcolor: '#ffffff',
              borderRadius: '22px',
              p: { xs: 3, md: 5 },
              maxWidth: 1200,
              mx: 'auto',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 3,
              }}
            >
              {compromisoCards.map((item) => (
                <Box
                  key={item.title}
                  sx={{
                    bgcolor: '#f5f7fa',
                    borderRadius: '22px',
                    p: 3,
                  }}
                >
                  <Typography
                    sx={{ fontSize: 28, fontWeight: 600, color: '#0b0e27', lineHeight: 1.2 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography sx={{ mt: 1.5, color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Footer text bar */}
          <Box
            sx={{
              mt: 3,
              bgcolor: '#f5f7fa',
              borderRadius: '22px',
              py: 3,
              px: 4,
              maxWidth: 1100,
              mx: 'auto',
              textAlign: 'center',
            }}
          >
            <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
              En Wit Biz te ayudamos a invertir en Forex de forma rentable y segura, con asesoría
              personalizada, análisis experto y total apego a la regulación
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
