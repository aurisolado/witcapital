'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InsightsIcon from '@mui/icons-material/Insights';
import HandymanIcon from '@mui/icons-material/Handyman';
import HubIcon from '@mui/icons-material/Hub';
import LanguageIcon from '@mui/icons-material/Language';
import ExploreIcon from '@mui/icons-material/Explore';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const roleCards = [
  {
    icon: <InsightsIcon />,
    title: 'Apoyo estratégico',
    text: 'Desde el análisis de riesgos hasta la ejecución de estrategias de expansión, coordinando lo legal, financiero y operativo',
  },
  {
    icon: <HandymanIcon />,
    title: 'Soluciones a medida',
    text: 'Ofrecemos cuentas internacionales, financiamiento y asesoría en divisas, con herramientas digitales para una gestión ágil de pagos globales',
  },
  {
    icon: <HubIcon />,
    title: 'Mas oportunidades',
    text: 'Te asesoramos para optimizar costos con offshoring o mejorar eficiencia con nearshoring, fortaleciendo tus canales comerciales.',
  },
  {
    icon: <LanguageIcon />,
    title: 'Crecimiento sólido',
    text: 'Impulsamos relocalización estratégica para fomentar innovación y estabilidad en tu negocio',
  },
];

// ---------------------------------------------------------------------------
// View
// ---------------------------------------------------------------------------

export default function NearshoringAndOffshoreView() {
  return (
    <Box sx={{ bgcolor: '#ffffff' }}>
      {/* ================================================================== */}
      {/* 1. HERO — #f5f7fa background                                       */}
      {/* ================================================================== */}
      <Box sx={{ bgcolor: '#f5f7fa' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 6 },
              alignItems: 'center',
            }}
          >
            {/* Left — text */}
            <Box>
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
                Nearshore &{'\n'}
                <br />
                Offshore
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: '#1a202c',
                  mb: 2,
                }}
              >
                El nearshoring y offshoring son estrategias para relocalizar operaciones
                empresariales y optimizar la cadena de suministro en entornos internacionales.
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
                En Wit Biz evaluamos regulación, costos, disponibilidad de talento y estructura
                financiera para que tu expansión global sea rentable, segura y sostenible.
              </Typography>
            </Box>

            {/* Right — image */}
            <Box
              component="img"
              src="/assets/illustrations/E_NEARSHORE_OFFSHORE/01.png"
              alt="Nearshore y offshore"
              sx={{
                width: '100%',
                maxWidth: 640,
                justifySelf: { xs: 'center', md: 'end' },
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* ================================================================== */}
      {/* 2. NEARSHORING — white background                                   */}
      {/* ================================================================== */}
      <Box sx={{ bgcolor: '#ffffff' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 8 },
              alignItems: 'center',
            }}
          >
            {/* Left — image */}
            <Box
              component="img"
              src="/assets/illustrations/E_NEARSHORE_OFFSHORE/02.png"
              alt="Nearshoring"
              sx={{
                width: '100%',
                maxWidth: 540,
                justifySelf: { xs: 'center', md: 'start' },
              }}
            />

            {/* Right — text */}
            <Box>
              {/* Title with lime accent underline */}
              <Typography
                component="h2"
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: 28, md: 40 },
                  fontWeight: 700,
                  color: '#0b0e27',
                  mb: 3,
                }}
              >
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
                      bottom: -6,
                      height: 4,
                      borderRadius: 99,
                      bgcolor: 'primary.main',
                    },
                  }}
                >
                  Nearshoring
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: '#1a202c',
                  mt: 4,
                }}
              >
                El nearshoring consiste en trasladar parte de la producción o servicios a un país
                cercano, generalmente con husos horarios similares, lo que facilita la comunicación y
                reduce costos logísticos.
              </Typography>

              {/* Case box */}
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mt: 4 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '10px',
                    border: '1px solid #e3e8ef',
                    bgcolor: '#ffffff',
                    display: 'grid',
                    placeItems: 'center',
                    flexShrink: 0,
                    '& svg': { fontSize: 24, color: '#6b7a33' },
                  }}
                >
                  <ExploreIcon />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 21,
                      fontWeight: 600,
                      color: '#0b0e27',
                      mb: 1,
                    }}
                  >
                    Caso de éxito: México
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
                    Según &quot;Kearney&apos;s Global Services Location Index (GSLI) 2021&quot;,
                    México se mantiene como uno de los principales destinos de nearshoring para
                    empresas estadounidenses, gracias a su ubicación geográfica y similitudes
                    culturales.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================================================================== */}
      {/* 3. OFFSHORING — white background                                    */}
      {/* ================================================================== */}
      <Box sx={{ bgcolor: '#ffffff' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 4, md: 8 },
              alignItems: 'center',
            }}
          >
            {/* Left — text */}
            <Box>
              {/* Title with lime accent underline */}
              <Typography
                component="h2"
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: { xs: 28, md: 40 },
                  fontWeight: 700,
                  color: '#0b0e27',
                  mb: 3,
                }}
              >
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
                      bottom: -6,
                      height: 4,
                      borderRadius: 99,
                      bgcolor: 'primary.main',
                    },
                  }}
                >
                  Offshoring
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: 1.75,
                  color: '#1a202c',
                  mt: 4,
                }}
              >
                El offshoring implica la deslocalización de operaciones a un país lejano, por lo
                general para aprovechar costos laborales más bajos, incentivos fiscales o
                disponibilidad de talento especializado
              </Typography>

              {/* Case box */}
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start', mt: 4 }}>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: '10px',
                    border: '1px solid #e3e8ef',
                    bgcolor: '#ffffff',
                    display: 'grid',
                    placeItems: 'center',
                    flexShrink: 0,
                    '& svg': { fontSize: 24, color: '#6b7a33' },
                  }}
                >
                  <LanguageIcon />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: 21,
                      fontWeight: 600,
                      color: '#0b0e27',
                      mb: 1,
                    }}
                  >
                    Caso de éxito: India
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
                    De acuerdo con &quot;Deloitte&apos;s Global Outsourcing Survey 2022&quot;, India
                    sigue siendo un destino popular de offshoring en tecnología y servicios de TI,
                    debido a la experiencia de su fuerza laboral y costos competitivos.
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Right — image */}
            <Box
              component="img"
              src="/assets/illustrations/E_NEARSHORE_OFFSHORE/03.png"
              alt="Offshoring"
              sx={{
                width: '100%',
                maxWidth: 540,
                justifySelf: { xs: 'center', md: 'end' },
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* ================================================================== */}
      {/* 4. NUESTRO ROL COMO ALIADOS ESTRATÉGICOS — #f5f7fa background      */}
      {/* ================================================================== */}
      <Box sx={{ bgcolor: '#f5f7fa' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
          {/* Centered heading block */}
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 880, mx: 'auto', mb: { xs: 5, md: 7 } }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: { xs: 28, md: 40 },
                fontWeight: 700,
                lineHeight: 1.15,
                color: '#0b0e27',
              }}
            >
              Nuestro rol
              <br />
              como{' '}
              <Box component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                aliados estratégicos
              </Box>
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
              En Wit Biz, combinamos un profundo entendimiento de los mercados locales e
              internacionales con el respaldo de especialistas en regulación, logística y banca
            </Typography>
          </Stack>

          {/* 4 cards in a row */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' },
              gap: 3,
            }}
          >
            {roleCards.map((item) => (
              <Box
                key={item.title}
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '22px',
                  p: 3,
                }}
              >
                {/* Icon container */}
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

                {/* Card title */}
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: 21,
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: '#0b0e27',
                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>

                {/* Card body */}
                <Typography
                  sx={{
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

          {/* Footer text bar */}
          <Box
            sx={{
              mt: { xs: 5, md: 7 },
              bgcolor: '#f5f7fa',
              borderRadius: '22px',
              py: 3,
              px: 4,
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
              }}
            >
              Con nuestra asesoría en Nearshore & Offshore, tu empresa podrá abordar la expansión
              internacional con seguridad, rentabilidad y una visión de largo plazo
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
