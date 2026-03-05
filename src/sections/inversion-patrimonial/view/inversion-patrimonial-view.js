'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShieldIcon from '@mui/icons-material/Shield';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BuildIcon from '@mui/icons-material/Build';

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

const estadosCards = [
  {
    icon: <TrendingUpIcon />,
    title: 'Crecimiento Sólido',
    text: 'Mercado dinámico y transparente que ofrece oportunidades para diversificar y proteger tu patrimonio en contextos económicos cambiantes.',
  },
  {
    icon: <AccountBalanceIcon />,
    title: 'Financiamiento Competitivo',
    text: 'Tasas de interés favorables y facilidades para inversionistas extranjeros, lo que eleva los márgenes de rentabilidad',
  },
  {
    icon: <CurrencyExchangeIcon />,
    title: 'Cobertura Cambiaria',
    text: 'Al poseer activos en dólares, se mitiga el riesgo cambiario y se refuerza la diversificación del portafolio',
  },
];

const ventajasCards = [
  {
    icon: <ApartmentIcon />,
    title: 'Acceso Simple',
    text: 'Inversión en bienes raíces sin trámites de compraventa ni gestión directa',
  },
  {
    icon: <Diversity3Icon />,
    title: 'Diversificación',
    text: 'Activos repartidos en diferentes sectores y ubicaciones, disminuyendo riesgos',
  },
  {
    icon: <WaterDropIcon />,
    title: 'Flujo Seguro',
    text: 'Generan ingresos por alquiler y plusvalía, distribuyendo dividendos frecuentes',
  },
  {
    icon: <MonetizationOnIcon />,
    title: 'Liquidez',
    text: 'Al cotizar en mercados bursátiles, es posible comprar o vender participaciones con agilidad',
  },
];

const trustItems = [
  {
    icon: <ShieldIcon />,
    title: 'Protección de activos',
    text: 'Brinda protección legal frente a posibles litigios y garantiza el resguardo del patrimonio familiar o empresarial a largo plazo.',
  },
  {
    icon: <CalendarMonthIcon />,
    title: 'Planificación sucesoria',
    text: 'Establece con claridad el reparto de bienes, evitando procesos testamentarios prolongados.',
  },
  {
    icon: <BuildIcon />,
    title: 'Eficiencia administrativa y fiscal',
    text: 'Centraliza la gestión de activos y optimiza la carga fiscal aprovechando beneficios de tratados internacionales.',
  },
];

const servicioCards = [
  {
    title: 'Asesoría personalizada',
    text: 'Definimos tus objetivos financieros y evaluamos tu perfil de riesgo para recomendar inmuebles, REITs o esquemas de Trust adecuados',
  },
  {
    title: 'Implementación y seguimiento',
    text: 'Asistimos en la creación del Trust e inversión inmobiliaria, ajustando la estrategia según el rendimiento.',
  },
  {
    title: 'Evaluación legal y fiscal',
    text: 'Evaluamos tu perfil y objetivos para recomendar inversiones inmobiliarias y esquemas de Trust adecuados',
  },
  {
    title: 'Transparencia y confidencialidad',
    text: 'Resguardamos tu información y te mantenemos informado en todo momento, brindando un servicio seguro y confiable',
  },
];

export default function InversionPatrimonialView() {
  return (
    <Box sx={{ bgcolor: '#ffffff' }}>
      {/* ── 1. HERO (white bg) ── */}
      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="/assets/illustrations/P_INVERSION_PATRIMONIAL/P_INVERSION_PATRIMONIAL_01.png"
            alt="Inversión Patrimonial"
            sx={{ width: '100%', maxWidth: 540, justifySelf: { xs: 'center', md: 'start' } }}
          />

          <Box sx={{ maxWidth: 520 }}>
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
              Inversión
              <br />
              Patrimonial
            </Typography>

            <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75, mb: 2.5 }}>
              En Wit Biz, diseñamos estrategias personalizadas para impulsar el crecimiento y la
              diversificación de tu patrimonio. Invertir en bienes raíces fuera de México,
              particularmente en Estados Unidos, puede generar ingresos por renta y plusvalía a
              mediano y largo plazo.
            </Typography>
            <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
              Nuestro equipo realiza análisis de mercado profundos, identificando zonas con alto
              potencial y tendencias inmobiliarias globales que permitan obtener rendimientos
              atractivos
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* ── 2. Estados Unidos (#f5f7fa bg) ── */}
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
            Estados Unidos
            <br />
            tu próximo paso financiero
          </Typography>

          <Box
            sx={{
              mt: { xs: 4, md: 7 },
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {estadosCards.map((item) => (
              <Box
                key={item.title}
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '22px',
                  p: 3,
                  minHeight: 280,
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

      {/* ── 3. REITs (white bg) ── */}
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="/assets/illustrations/P_INVERSION_PATRIMONIAL/P_INVERSION_PATRIMONIAL_02.png"
            alt="REITs"
            sx={{ width: '100%', maxWidth: 600, justifySelf: { xs: 'center', md: 'start' } }}
          />

          <Box sx={{ maxWidth: 520 }}>
            <Typography
              sx={{
                color: 'primary.main',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                mb: 1,
              }}
            >
              REITs
            </Typography>
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
              Tu Entrada al Mercado Inmobiliario Global
            </Typography>
            <Typography sx={{ mt: 3, color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
              Los REITs permiten invertir en bienes raíces a través de acciones, sin necesidad de
              gestionar propiedades directamente
            </Typography>
          </Box>
        </Box>

        {/* Ventajas */}
        <Typography
          sx={{
            mt: { xs: 6, md: 8 },
            color: '#0b0e27',
            fontWeight: 700,
            fontSize: { xs: 20, md: 26 },
            textAlign: 'center',
            mb: { xs: 3, md: 5 },
          }}
        >
          Ventajas de los REITS
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {ventajasCards.map((item) => (
            <Box
              key={item.title}
              sx={{
                bgcolor: '#ffffff',
                borderRadius: '22px',
                border: '1px solid #e5e9ef',
                boxShadow: '0 8px 18px rgba(12, 18, 40, 0.06)',
                p: 3,
              }}
            >
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '10px',
                  border: '1px solid #e3e8ef',
                  bgcolor: '#f5f7fa',
                  display: 'grid',
                  placeItems: 'center',
                  mb: 2,
                  '& svg': { fontSize: 24, color: '#6b7a33' },
                }}
              >
                {item.icon}
              </Box>
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
      </Container>

      {/* ── 4. Uso de Trusts (#f5f7fa bg) ── */}
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
              mb: { xs: 4, md: 6 },
            }}
          >
            Uso de Trusts en la <Accent>inversión inmobiliaria</Accent>
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 8 },
              alignItems: 'start',
            }}
          >
            <Box sx={{ bgcolor: '#ffffff', borderRadius: '22px', p: { xs: 3, md: 5 } }}>
              <Stack spacing={5}>
                {trustItems.map((item) => (
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
            </Box>

            <Box
              component="img"
              src="/assets/illustrations/P_INVERSION_PATRIMONIAL/P_INVERSION_PATRIMONIAL_03.png"
              alt="Uso de Trusts"
              sx={{
                width: '100%',
                maxWidth: 600,
                justifySelf: { xs: 'center', md: 'end' },
                alignSelf: 'center',
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* ── 5. Nuestro servicio integral (white bg) ── */}
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
            Nuestro servicio integral
          </Typography>
          <Typography sx={{ color: '#1a202c', fontSize: 18, lineHeight: 1.75 }}>
            En Wit Biz, te acompañamos en cada fase de tu inversión en bienes raíces en Estados
            Unidos:
          </Typography>
        </Stack>

        <Box
          sx={{
            mt: { xs: 4, md: 6 },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 3,
            maxWidth: 960,
            mx: 'auto',
          }}
        >
          {servicioCards.map((item) => (
            <Box
              key={item.title}
              sx={{
                bgcolor: '#f5f7fa',
                borderRadius: '22px',
                p: 3,
                minHeight: 140,
              }}
            >
              <Typography sx={{ fontSize: 21, fontWeight: 600, color: '#0b0e27', lineHeight: 1.2 }}>
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
  );
}
