'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CampaignIcon from '@mui/icons-material/Campaign';
import ShieldIcon from '@mui/icons-material/Shield';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SavingsIcon from '@mui/icons-material/Savings';
import SecurityIcon from '@mui/icons-material/Security';
import BoltIcon from '@mui/icons-material/Bolt';
import BalanceIcon from '@mui/icons-material/Balance';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';

// ---------------------------------------------------------------------------
// Accent — lime underline bar via ::after pseudo-element
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const strategyCards = [
  {
    image: '/assets/illustrations/E_DIVISAS_STABLECOINS_01/02.png',
    title: 'Divisas',
    text: 'El peso, dólar y euro son claves en pagos globales. El mercado de divisas mueve más de 7 billones diarios, impulsando cobertura y competitividad.',
  },
  {
    image: '/assets/illustrations/E_DIVISAS_STABLECOINS_01/03.png',
    title: 'Stablecoins',
    text: 'Stablecoins como PYUSD o USDC, ligadas al dólar, ofrecen pagos globales rápidos, estables y con bajas comisiones',
  },
];

const marketBenefits = [
  {
    icon: <CampaignIcon />,
    title: 'Asesoría a medida',
    text: 'Te asesoramos en el uso de stablecoins y en la optimización de divisas para reducir costos y riesgos cambiarios',
  },
  {
    icon: <ShieldIcon />,
    title: 'Eficiencia y seguridad',
    text: 'Agilizamos pagos globales con stablecoins, reduciendo costos, volatilidad y ampliando tu alcance',
  },
  {
    icon: <AutorenewIcon />,
    title: 'Conversión instantánea',
    text: 'Mitiga la volatilidad con conversiones rápidas a divisas y registra cada operación para un mayor control y cumplimiento fiscal',
  },
  {
    icon: <SupportAgentIcon />,
    title: 'Soporte continuo',
    text: 'Ofrecemos reportes estratégicos, capacitación en herramientas digitales y planes personalizados con total transparencia en costos',
  },
];

const cultureItems = [
  {
    icon: <SavingsIcon />,
    title: 'Reducción de Costos',
    text: 'Al minimizar intermediarios y optimizar la gestión de pagos, se reducen comisiones y tarifas',
  },
  {
    icon: <SecurityIcon />,
    title: 'Seguridad y Trazabilidad',
    text: 'La tecnología blockchain ofrece cifrado de alto nivel y registros inalterables',
  },
  {
    icon: <BoltIcon />,
    title: 'Eficiencia Operativa',
    text: 'Agiliza la administración de cobros y pagos globales, reduciendo tiempos de procesamiento',
  },
  {
    icon: <BalanceIcon />,
    title: 'Menor Volatilidad',
    text: 'Las stablecoins presentan fluctuaciones más bajas que otras criptomonedas, ideales para transacciones diarias',
  },
  {
    icon: <CandlestickChartIcon />,
    title: 'Acceso a nuevos mercados',
    text: 'Atrae a clientes que buscan métodos de pago digitales estables y confiables',
  },
];

// ===========================================================================
// DivisasView
// ===========================================================================
export default function DivisasView() {
  return (
    <Box sx={{ bgcolor: '#ffffff' }}>
      {/* ================================================================
          1. HERO — #f5f7fa bg, left text + right image
          ================================================================ */}
      <Box sx={{ bgcolor: '#f5f7fa' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 6 },
              alignItems: 'center',
            }}
          >
            {/* Left — text */}
            <Box sx={{ maxWidth: 540 }}>
              <Typography
                component="h1"
                sx={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: { xs: 36, md: 63 },
                  fontWeight: 900,
                  lineHeight: 1.05,
                  color: '#0b0e27',
                  mb: 3,
                }}
              >
                Divisas &
                <br />
                <Accent>Stablecoins</Accent>
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: '#1a202c',
                }}
              >
                En Wit Biz ofrecemos soluciones en divisas y stablecoins para optimizar costos,
                agilizar pagos internacionales y fortalecer la estabilidad financiera en un entorno
                global competitivo
              </Typography>
            </Box>

            {/* Right — image */}
            <Box
              component="img"
              src="/assets/illustrations/E_DIVISAS_STABLECOINS_01/01.png"
              alt="Divisas y stablecoins"
              sx={{
                width: '100%',
                maxWidth: 760,
                justifySelf: { xs: 'center', md: 'end' },
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* ================================================================
          2. Estrategias financieras — white bg, centered h2 + 2-col grid
          ================================================================ */}
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: { xs: 26, md: 40 },
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#0b0e27',
            }}
          >
            Estrategias financieras
            <br />
            globales con <Accent>divisas y stablecoins</Accent>
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: 4, md: 5 },
            maxWidth: 820,
            mx: 'auto',
          }}
        >
          {strategyCards.map((card) => (
            <Box key={card.title}>
              {/* Image container */}
              <Box
                sx={{
                  borderRadius: '22px',
                  border: '1px solid #e3e8ef',
                  bgcolor: '#f5f7fa',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 3,
                  minHeight: 280,
                }}
              >
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={{ width: '100%', maxWidth: 300 }}
                />
              </Box>

              {/* Card title */}
              <Typography
                sx={{
                  mt: 2.5,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 21,
                  fontWeight: 600,
                  color: '#0b0e27',
                }}
              >
                {card.title}
              </Typography>

              {/* Card body */}
              <Typography
                sx={{
                  mt: 1,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: '#1a202c',
                }}
              >
                {card.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* ================================================================
          3. Beneficios del mercado de divisas — #f5f7fa bg, 4 cards
          ================================================================ */}
      <Box sx={{ bgcolor: '#f5f7fa' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: { xs: 26, md: 40 },
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#0b0e27',
              }}
            >
              Beneficios del <Accent>mercado de divisas</Accent>
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 3,
            }}
          >
            {marketBenefits.map((item) => (
              <Box
                key={item.title}
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '22px',
                  border: '1px solid #e5e9ef',
                  boxShadow: '0 8px 18px rgba(12, 18, 40, 0.06)',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Icon container — lime bg */}
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

                {/* Benefit title */}
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 21,
                    fontWeight: 600,
                    lineHeight: 1.25,
                    color: '#2e3539',
                  }}
                >
                  {item.title}
                </Typography>

                {/* Benefit body */}
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
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ================================================================
          4. Fundamentos de nuestra cultura — white bg
             h3: Inter 40/900, 3 top + 2 bottom grid
          ================================================================ */}
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
          <Typography
            component="h3"
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: { xs: 28, md: 40 },
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#0b0e27',
            }}
          >
            Fundamentos de nuestra{' '}
            <Accent>cultura</Accent>
          </Typography>
        </Box>

        {/* Top row — 3 items */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: { xs: 4, md: 5 },
            maxWidth: 1000,
            mx: 'auto',
          }}
        >
          {cultureItems.slice(0, 3).map((item) => (
            <Box key={item.title}>
              {/* Icon container — bordered style */}
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '10px',
                  border: '1px solid #e3e8ef',
                  bgcolor: '#f5f7fa',
                  display: 'grid',
                  placeItems: 'center',
                  '& svg': { fontSize: 24, color: '#6b7a33' },
                }}
              >
                {item.icon}
              </Box>

              {/* Culture title */}
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 21,
                  fontWeight: 600,
                  color: '#0b0e27',
                }}
              >
                {item.title}
              </Typography>

              {/* Culture body */}
              <Typography
                sx={{
                  mt: 1,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: '#1a202c',
                }}
              >
                {item.text}
              </Typography>

              {/* Vertical lime accent bar */}
              <Box
                sx={{
                  mt: 2,
                  width: 3,
                  height: 24,
                  bgcolor: 'primary.main',
                  borderRadius: 99,
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Bottom row — 2 items, centered */}
        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: { xs: 4, md: 5 },
            maxWidth: 660,
            mx: 'auto',
          }}
        >
          {cultureItems.slice(3).map((item) => (
            <Box key={item.title}>
              {/* Icon container — bordered style */}
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '10px',
                  border: '1px solid #e3e8ef',
                  bgcolor: '#f5f7fa',
                  display: 'grid',
                  placeItems: 'center',
                  '& svg': { fontSize: 24, color: '#6b7a33' },
                }}
              >
                {item.icon}
              </Box>

              {/* Culture title */}
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 21,
                  fontWeight: 600,
                  color: '#0b0e27',
                }}
              >
                {item.title}
              </Typography>

              {/* Culture body */}
              <Typography
                sx={{
                  mt: 1,
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: '#1a202c',
                }}
              >
                {item.text}
              </Typography>

              {/* Vertical lime accent bar */}
              <Box
                sx={{
                  mt: 2,
                  width: 3,
                  height: 24,
                  bgcolor: 'primary.main',
                  borderRadius: 99,
                }}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
