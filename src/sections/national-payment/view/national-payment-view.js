'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Bullet({ text }) {
  return (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: 'flex-start' }}>
      <Box
        sx={{
          mt: 0.3,
          width: 50,
          height: 50,
          borderRadius: '10px',
          bgcolor: '#f5f7fa',
          border: '1px solid #e3e8ef',
          display: 'grid',
          placeItems: 'center',
          flexShrink: 0,
          '& svg': { fontSize: 24, color: '#6b7a33' },
        }}
      >
        <CheckCircleOutlineIcon />
      </Box>
      <Typography sx={{ color: '#1a202c', lineHeight: 1.75, fontSize: 16 }}>{text}</Typography>
    </Stack>
  );
}

export default function NationalPaymentView() {
  const [tab, setTab] = useState('cards');

  const tabs = [
    { id: 'cards', label: 'TIPOS DE TARJETAS' },
    { id: 'bank', label: 'BANCA DIGITAL' },
    { id: 'pay', label: 'PAGOS Y TERMINALES' },
  ];

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
            src="/assets/illustrations/E_PAGOS NACIONALES/E_PAGOS NACIONALES_01_03.png"
            alt="Pagos nacionales"
            sx={{ width: '100%', maxWidth: 540, justifySelf: { xs: 'center', md: 'start' } }}
          />

          <Box sx={{ maxWidth: 520 }}>
            <Typography
              component="h1"
              sx={{
                color: '#0b0e27',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 900,
                fontSize: { xs: 36, md: 63 },
                lineHeight: 1.05,
                mb: 3,
              }}
            >
              Pagos
              <br />
              Nacionales
            </Typography>
            <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
              En Wit Biz, transformamos la forma en que las empresas gestionan sus pagos nacionales
              a través de un ecosistema digital integral. Nuestro objetivo es automatizar procesos,
              optimizar la administración de ingresos y el control de gastos, ofreciendo
              herramientas que se adaptan al crecimiento y las necesidades de cada organización
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* ── 2. Tabbed section (#eef1f6 bg) ── */}
      <Box sx={{ bgcolor: '#eef1f6', pt: { xs: 5, md: 6 }, pb: { xs: 7, md: 10 } }}>
        <Container maxWidth="xl">
          {/* Tab pills */}
          <Stack
            role="tablist"
            aria-label="Secciones de pagos nacionales"
            direction="row"
            spacing={{ xs: 1.25, md: 3 }}
            sx={{ justifyContent: 'center', overflowX: 'auto', pb: 1 }}
          >
            {tabs.map((item) => (
              <Button
                key={item.id}
                onClick={() => setTab(item.id)}
                role="tab"
                aria-selected={tab === item.id}
                sx={{
                  minWidth: { xs: 160, md: 220 },
                  borderRadius: '999px',
                  bgcolor: tab === item.id ? 'primary.main' : 'rgba(194, 213, 101, 0.7)',
                  color: '#ffffff',
                  fontWeight: tab === item.id ? 800 : 700,
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: 14,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  py: 1.2,
                  px: 3,
                  '&:hover': { bgcolor: 'primary.main' },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          {/* ── TAB 1: Tipos de tarjetas ── */}
          {tab === 'cards' && (
            <>
              <Box
                sx={{
                  mt: { xs: 4, md: 7 },
                  mx: 'auto',
                  width: '100%',
                  maxWidth: 980,
                  bgcolor: '#ffffff',
                  borderRadius: '22px',
                  p: { xs: 3, md: 5 },
                }}
              >
                <Stack spacing={1.5} sx={{ textAlign: 'center', alignItems: 'center' }}>
                  <Typography
                    component="h2"
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: { xs: 24, md: 40 },
                      fontWeight: 700,
                      color: '#0b0e27',
                    }}
                  >
                    Tipos de tarjetas
                  </Typography>
                  <Typography
                    sx={{ maxWidth: 700, color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}
                  >
                    Agiliza la administración de gastos empresariales con tarjetas prepagadas, tanto
                    físicas como virtuales, emitidas bajo lineamientos de instituciones reconocidas.
                    Disfruta de cobertura global y seguridad ante cada operación.
                  </Typography>
                </Stack>

                <Box
                  sx={{
                    mt: 5,
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: { xs: 3, md: 4 },
                    maxWidth: 700,
                    mx: 'auto',
                  }}
                >
                  {[
                    {
                      img: '/assets/illustrations/E_PAGOS NACIONALES/E_PAGOS NACIONALES_01_02.png',
                      title: 'Físicas',
                      text: 'Perfectas para viáticos, gastos operativos o bonificaciones al personal.',
                    },
                    {
                      img: '/assets/illustrations/E_PAGOS NACIONALES/E_PAGOS NACIONALES_01_01.png',
                      title: 'Virtuales',
                      text: 'Ideales para compras en línea o gastos específicos, brindando un control inmediato y seguro',
                    },
                  ].map((card) => (
                    <Box key={card.title}>
                      <Box
                        sx={{
                          bgcolor: '#f5f7fa',
                          borderRadius: '22px',
                          border: '1px solid #e3e8ef',
                          height: 260,
                          display: 'grid',
                          placeItems: 'center',
                          p: 2,
                        }}
                      >
                        <Box
                          component="img"
                          src={card.img}
                          alt={card.title}
                          sx={{ width: '100%', maxWidth: 260 }}
                        />
                      </Box>
                      <Typography
                        sx={{ mt: 2, fontWeight: 600, color: '#000000', fontSize: 21 }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        sx={{ mt: 1, color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}
                      >
                        {card.text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Benefits + footer */}
              <Box
                sx={{
                  mt: { xs: 5, md: 8 },
                  bgcolor: '#f5f7fa',
                  borderRadius: '22px',
                  p: { xs: 3, md: 5 },
                  maxWidth: 1200,
                  mx: 'auto',
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' },
                  gap: { xs: 4, md: 6 },
                  alignItems: 'start',
                }}
              >
                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: { xs: 24, md: 40 },
                      fontWeight: 700,
                      color: '#0b0e27',
                      mb: 4,
                    }}
                  >
                    Beneficios
                  </Typography>
                  <Stack spacing={3}>
                    <Bullet text="Separación clara de gastos personales y empresariales" />
                    <Bullet text="Optimización de viáticos, presupuestos y bonos corporativos" />
                    <Bullet text="Configuraciones de uso y alertas en tiempo real para mayor seguridad" />
                    <Bullet text="Visibilidad total de cada operación, reduciendo riesgos de mal uso de recursos." />
                  </Stack>
                </Box>

                <Box
                  sx={{
                    bgcolor: '#ffffff',
                    borderRadius: '22px',
                    p: { xs: 3, md: 4 },
                  }}
                >
                  <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
                    Con nuestras soluciones de Pagos Nacionales, modernizas tus métodos de cobro,
                    centralizas tus finanzas y gestionas mejor tus gastos.
                  </Typography>
                  <Typography
                    sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75, mt: 2.5 }}
                  >
                    En Wit Biz, te acompañamos para convertir cada transacción en una oportunidad de
                    crecimiento
                  </Typography>
                </Box>
              </Box>
            </>
          )}

          {/* ── TAB 2: Banca Digital ── */}
          {tab === 'bank' && (
            <>
              <Box
                sx={{
                  mt: { xs: 4, md: 7 },
                  mx: 'auto',
                  width: '100%',
                  maxWidth: 740,
                  bgcolor: '#ffffff',
                  borderRadius: '22px',
                  p: { xs: 3, md: 5 },
                }}
              >
                <Typography
                  component="h2"
                  sx={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: { xs: 24, md: 40 },
                    fontWeight: 700,
                    color: '#0b0e27',
                  }}
                >
                  Ventajas destacadas
                </Typography>
                <Typography
                  sx={{ mt: 2.5, color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}
                >
                  Nuestra Banca Digital es una plataforma completa que te permite concentrar en un
                  solo lugar el control de ingresos, gastos, pagos a proveedores y nomina.
                  Beneficios de la Banca Digital:
                </Typography>
                <Stack spacing={3} sx={{ mt: 4 }}>
                  <Bullet text="Automatización de pagos y generación de reportes financieros personalizados" />
                  <Bullet text="Optimización del flujo de caja con datos fiables en tiempo real" />
                  <Bullet text="Reducción de la carga administrativa al unificar operaciones bancarias en una sola plataforma" />
                  <Bullet text="Mayor control de ingresos y egresos, favoreciendo una planeación financiera sólida" />
                </Stack>
              </Box>

              {/* Footer bar */}
              <Box
                sx={{
                  mt: { xs: 5, md: 7 },
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
                  Con nuestras soluciones de Pagos Nacionales, modernizarás los métodos de cobro,
                  centralizarás tus finanzas y controlarás mejor tus gastos. En Wit Biz, te
                  acompañamos para que cada transacción sea una oportunidad de crecimiento
                </Typography>
              </Box>
            </>
          )}

          {/* ── TAB 3: Pagos y Terminales ── */}
          {tab === 'pay' && (
            <>
              <Box
                sx={{
                  mt: { xs: 4, md: 7 },
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                  gap: { xs: 4, md: 6 },
                  alignItems: 'start',
                }}
              >
                <Box>
                  <Typography
                    sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75, mb: 4 }}
                  >
                    Optimiza la experiencia de compra y reduce los tiempos de espera con soluciones
                    de cobro flexibles y seguras
                  </Typography>

                  <Typography sx={{ fontSize: 21, fontWeight: 600, color: '#0b0e27', mb: 1 }}>
                    Terminales
                  </Typography>
                  <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
                    Acepta pagos con tarjetas de débito y crédito en tu establecimiento de forma
                    ágil y confiable.
                  </Typography>

                  <Typography
                    sx={{ fontSize: 21, fontWeight: 600, color: '#0b0e27', mt: 4, mb: 1 }}
                  >
                    Enlaces de Pago
                  </Typography>
                  <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
                    Envía enlaces por correo electrónico, SMS o aplicaciones de mensajería para que
                    tus clientes realicen pagos a distancia, sin necesidad de contar con una
                    terminal física.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    bgcolor: '#ffffff',
                    borderRadius: '22px',
                    p: { xs: 3, md: 4 },
                  }}
                >
                  <Typography sx={{ fontSize: 21, fontWeight: 600, color: '#0b0e27', mb: 3 }}>
                    Ventajas destacadas
                  </Typography>
                  <Stack spacing={2.5}>
                    <Bullet text="Reducción de tiempos de espera y simplificación de procesos de cobro" />
                    <Bullet text="Experiencia de compra moderna y flexible" />
                    <Bullet text="Transacciones seguras con soporte para pagos diferidos y múltiples métodos de pago" />
                    <Bullet text="Integración directa con la Banca Digital de Wit Biz, para centralizar ingresos y optimizar la gestión financiera" />
                  </Stack>
                </Box>
              </Box>

              {/* Footer text */}
              <Box
                sx={{
                  mt: { xs: 5, md: 7 },
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
                  Con nuestras soluciones de Pagos Nacionales, modernizarás los métodos de cobro,
                  centralizarás tus finanzas y controlarás mejor tus gastos. En Wit Biz, te
                  acompañamos para que cada transacción sea una oportunidad de crecimiento
                </Typography>
              </Box>
            </>
          )}
        </Container>
      </Box>
    </Box>
  );
}
