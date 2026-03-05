'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShieldIcon from '@mui/icons-material/Shield';
import BoltIcon from '@mui/icons-material/Bolt';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PublicIcon from '@mui/icons-material/Public';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SchoolIcon from '@mui/icons-material/School';
import TuneIcon from '@mui/icons-material/Tune';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
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

const explorarItems = [
  {
    icon: <PublicIcon />,
    title: 'Diversificación de portafolio',
    text: 'Protege tu capital ante fluctuaciones económicas en tu país',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Oportunidades de crecimiento',
    text: 'Saca el mayor provecho de las variaciones del mercado cambiario para potenciar tu dinero',
  },
];

const stablecoinCards = [
  {
    icon: <ShieldIcon />,
    title: 'Mayor Estabilidad',
    text: 'Minimiza el riesgo de movimientos extremos',
  },
  {
    icon: <BoltIcon />,
    title: 'Rapidez y bajas comisiones',
    text: 'Ideales para pagos y transferencias internacionales',
  },
  {
    icon: <CurrencyExchangeIcon />,
    title: 'Conversión Inmediata',
    text: 'Muchas plataformas permiten convertir stablecoins a divisas tradicionales casi al instante',
  },
];

const aliadoCards = [
  {
    icon: <SupportAgentIcon />,
    title: 'Asesoría Integral',
    text: 'Te orientamos en la compra y venta tanto de divisas físicas como de stablecoins',
  },
  {
    icon: <SchoolIcon />,
    title: 'Capacitación Continua',
    text: 'Asesoría en billeteras, plataformas y gestión de activos',
  },
  {
    icon: <TuneIcon />,
    title: 'Atención Personalizada',
    text: 'Creamos un plan personalizado que equilibra riesgo, rendimiento y seguridad',
  },
];

const whyItems = [
  {
    icon: <EmojiEventsIcon />,
    title: 'Experiencia y Trayectoria',
    text: 'Nuestro equipo domina las tendencias en divisas y stablecoins',
  },
  {
    icon: <VerifiedUserIcon />,
    title: 'Solidez regulatoria',
    text: 'Cumplimos con la normativa financiera tanto a nivel nacional como internacional',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Flexibilidad y soporte',
    text: 'Te acompañamos desde tu primera operación hasta la administración continua de tus activos',
  },
];

export default function CashPassportView() {
  return (
    <Box sx={{ bgcolor: '#ffffff' }}>
      {/* ── 1. HERO (light bg) ── */}
      <Box sx={{ bgcolor: '#f5f7fa' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
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
                Divisas &
                <br />
                Stablecoins
              </Typography>

              <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75, mb: 2.5 }}>
                En Wit Biz, te ofrecemos un servicio integral para la compra y venta de divisas y
                stablecoins, ayudándote a diversificar tus activos de manera segura y con respaldo
                regulatorio.
              </Typography>
              <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
                Nuestro compromiso es guiarte en cada paso, brindando transparencia y cumpliendo con
                la normativa vigente, de modo que tomes decisiones informadas y fortalezcas tu
                patrimonio
              </Typography>
            </Box>

            <Box
              component="img"
              src="/assets/illustrations/P_DIVISAS_STABLECOINS/HERO.png"
              alt="Divisas & Stablecoins"
              sx={{ width: '100%', maxWidth: 680, justifySelf: { xs: 'center', md: 'end' } }}
            />
          </Box>
        </Container>
      </Box>

      {/* ── 2. Explora el Mundo de las Divisas (#f5f7fa bg) ── */}
      <Box sx={{ bgcolor: '#f5f7fa' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 700, mx: 'auto' }}>
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
              Explora el Mundo de las Divisas
            </Typography>
            <Typography sx={{ color: '#1a202c', fontSize: 18, lineHeight: 1.75 }}>
              Las divisas son monedas de distintos países que se utilizan en transacciones comerciales
              y financieras. Para las personas físicas, la compra y venta de divisas puede ofrecer
            </Typography>
          </Stack>

          {/* White card with features + image */}
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              bgcolor: '#ffffff',
              borderRadius: '22px',
              p: { xs: 3, md: 5 },
              maxWidth: 960,
              mx: 'auto',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
              gap: 4,
              alignItems: 'center',
            }}
          >
            <Stack spacing={4}>
              {explorarItems.map((item) => (
                <Box key={item.title} sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
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
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{ color: '#0b0e27', fontWeight: 600, fontSize: 28, lineHeight: 1.2 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{ mt: 1, color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>

            <Box
              component="img"
              src="/assets/illustrations/P_DIVISAS_STABLECOINS/SECTION1.png"
              alt="Explora divisas"
              sx={{ width: '100%', maxWidth: 320, justifySelf: 'center' }}
            />
          </Box>
        </Container>
      </Box>

      {/* ── 3. Stablecoins (white bg) ── */}
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
            <Accent>Stablecoins</Accent>
            <br />
            la nueva cara del{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              dinero digital
            </Box>
          </Typography>
          <Typography sx={{ color: '#1a202c', fontSize: 18, lineHeight: 1.75 }}>
            A diferencia de criptomonedas más volátiles generalmente una moneda fiduciaria como el
            dólar, lo que reduce las fluctuaciones bruscas de precio
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
          {stablecoinCards.map((item) => (
            <Box
              key={item.title}
              sx={{
                bgcolor: '#f5f7fa',
                borderRadius: '22px',
                p: 3,
                minHeight: 240,
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
                sx={{ fontSize: 28, lineHeight: 1.2, color: '#4d4d4d', fontWeight: 600 }}
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

      {/* ── 4. Tu aliado financiero personal (#f5f7fa bg) ── */}
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
              Tu <Accent>aliado financiero</Accent> personal
            </Typography>
            <Typography sx={{ color: '#1a202c', fontSize: 18, lineHeight: 1.75 }}>
              En Wit Biz, operamos bajo estrictas regulaciones que protegen tu información y tu
              capital. Realizamos transacciones con total claridad en comisiones y costos,
              fortaleciendo la confianza en cada operación. Asimismo, nos mantenemos al día con los
              requisitos legales de cada jurisdicción para que inviertas con la certeza de contar con
              un socio confiable
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
            {aliadoCards.map((item) => (
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

          <Box sx={{ mt: { xs: 5, md: 7 }, textAlign: 'center' }}>
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
              AGENDA UNA CITA
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ── 5. Por qué Wit Biz (white bg, split layout) ── */}
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'start',
          }}
        >
          {/* Left: feature items in #f5f7fa boxes */}
          <Stack spacing={3}>
            {whyItems.map((item) => (
              <Box
                key={item.title}
                sx={{
                  bgcolor: '#f5f7fa',
                  borderRadius: '22px',
                  p: 3,
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start',
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
                    '& svg': { fontSize: 24, color: '#6b7a33' },
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{ color: '#0b0e27', fontWeight: 600, fontSize: 24, lineHeight: 1.2 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{ mt: 1, color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>

          {/* Right: title + subtitle in #f5f7fa box */}
          <Box sx={{ bgcolor: '#f5f7fa', borderRadius: '22px', p: { xs: 3, md: 5 } }}>
            <Typography
              component="h2"
              sx={{
                color: '#0b0e27',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 700,
                fontSize: { xs: 24, md: 40 },
                lineHeight: 1.05,
                mb: 3,
              }}
            >
              Por qué Wit Biz
              <br />
              es tu{' '}
              <Accent>aliado estratégico</Accent>
            </Typography>
            <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
              Con Wit Biz, dispones de un servicio profesional que integra innovación, experiencia
              y seguridad regulatoria, para aprovechar al máximo las oportunidades que ofrecen las
              divisas y las stablecoins.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
