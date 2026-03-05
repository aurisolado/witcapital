'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import ShieldIcon from '@mui/icons-material/Shield';
import LockIcon from '@mui/icons-material/Lock';
import GavelIcon from '@mui/icons-material/Gavel';
import StarIcon from '@mui/icons-material/Star';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ArticleIcon from '@mui/icons-material/Article';
import VerifiedIcon from '@mui/icons-material/Verified';

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

const roleCards = [
  {
    icon: <PersonIcon />,
    title: 'Settlor',
    text: 'Persona que transfiere sus activos al Trust y establece las reglas de administración y distribución',
  },
  {
    icon: <AccountBalanceIcon />,
    title: 'Trustee',
    text: 'Responsable de administrar los activos según las disposiciones del Settlor',
  },
  {
    icon: <FamilyRestroomIcon />,
    title: 'Beneficiarios',
    text: 'Quienes reciben los beneficios del Trust conforme a las condiciones establecidas',
  },
];

const benefitCards = [
  {
    icon: <ShieldIcon />,
    title: 'Preservación del patrimonio',
    text: 'Preserva activos clave bajo una estructura familiar, asegurando su continuidad y beneficios para futuras generaciones',
  },
  {
    icon: <AccountBalanceIcon />,
    title: 'Optimización patrimonial',
    text: 'Facilita la sucesión de bienes y protege a beneficiarios vulnerables, reduciendo costos y procesos legales',
  },
  {
    icon: <LockIcon />,
    title: 'Protección de activos',
    text: 'Protege el patrimonio ante riesgos legales y reduce la exposición a embargos, asegurando su estabilidad',
  },
  {
    icon: <GavelIcon />,
    title: 'Protección frente a acreedores',
    text: 'El Trust protege los bienes de acreedores y garantiza la continuidad patrimonial en contextos complejos',
  },
  {
    icon: <StarIcon />,
    title: 'Cumplimiento hereditario',
    text: 'En jurisdicciones donde existe la figura de herederos obligatorios, el Trust permite planificar la distribución de manera estratégica y equitativa',
  },
  {
    icon: <VisibilityOffIcon />,
    title: 'Privacidad y flexibilidad',
    text: 'Los Trusts ofrecen privacidad y permiten personalizar la distribución del patrimonio según las reglas del Settlor',
  },
];

const fiscalItems = [
  {
    icon: <ArticleIcon />,
    title: 'Tratados internacionales',
    text: 'Optimiza la carga fiscal mediante el aprovechamiento de tratados bilaterales y convenios de doble imposición',
  },
  {
    icon: <VerifiedIcon />,
    title: 'Estructuras exentas',
    text: 'Algunos Trusts califican como entidades libres de impuestos en Estados Unidos o disfrutan de tratamientos preferenciales',
  },
  {
    icon: <LockIcon />,
    title: 'Trusts irrevocables',
    text: 'Al transferir los bienes, se considera una enajenación que puede reducir o eliminar obligaciones fiscales al salir del patrimonio personal del Settlor.',
  },
];

export default function PrivateTrustView() {
  return (
    <Box sx={{ bgcolor: '#ffffff' }}>
      {/* ── 1. HERO (#f5f7fa bg, stacked: text top, image below) ── */}
      <Box sx={{ bgcolor: '#f5f7fa' }}>
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
          <Box sx={{ maxWidth: 600 }}>
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
              Private Trust
            </Typography>

            <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75, mb: 2.5 }}>
              Un Private Trust en Estados Unidos es un instrumento legal que permite a un Fundador
              o Settlor (propietario de los activos) transferir bienes o derechos a un Fiduciario
              de confianza (Trustee).
            </Typography>
            <Typography sx={{ color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
              El Trustee administra los activos en beneficio de los Beneficiarios designados,
              siguiendo las instrucciones que el Settlor establezca. Esta estructura brinda
              protección legal y flexibilidad para conservar y hacer crecer el patrimonio, tanto
              con fines personales como empresariales
            </Typography>
          </Box>

          <Box
            component="img"
            src="/assets/illustrations/PRIVATE_TRUST/P_PRIVATE_TRUST_01.png"
            alt="Private Trust"
            sx={{
              display: 'block',
              mt: { xs: 4, md: 6 },
              mx: 'auto',
              width: '100%',
              maxWidth: 900,
            }}
          />
        </Container>
      </Box>

      {/* ── 2. Private Trust en Estados Unidos (white bg) ── */}
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
            mb: { xs: 4, md: 7 },
          }}
        >
          Private Trust en Estados Unidos
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {roleCards.map((item) => (
            <Box
              key={item.title}
              sx={{
                bgcolor: '#f5f7fa',
                borderRadius: '22px',
                p: 3,
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
              <Typography sx={{ fontSize: 21, fontWeight: 600, color: '#0b0e27' }}>
                {item.title}
              </Typography>
              <Typography sx={{ mt: 1, color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
                {item.text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>

      {/* ── 3. Beneficios Principales (#f5f7fa bg) ── */}
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
            Beneficios Principales
          </Typography>

          <Box
            sx={{
              mt: { xs: 4, md: 7 },
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
            }}
          >
            {benefitCards.map((item) => (
              <Box
                key={item.title}
                sx={{
                  bgcolor: '#ffffff',
                  borderRadius: '22px',
                  border: '1px solid #e3e8ef',
                  boxShadow: '0 8px 18px rgba(12, 18, 40, 0.06)',
                  p: 3,
                  minHeight: 200,
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
                <Typography sx={{ fontSize: 21, fontWeight: 600, color: '#0b0e27', lineHeight: 1.2 }}>
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

      {/* ── 4. Optimización fiscal (white bg, split layout) ── */}
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: 4, md: 8 },
            alignItems: 'start',
          }}
        >
          {/* Left: feature items in #f5f7fa boxes */}
          <Stack spacing={3}>
            {fiscalItems.map((item) => (
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
                  <Typography sx={{ color: '#0b0e27', fontWeight: 600, fontSize: 24, lineHeight: 1.2 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ mt: 1, color: '#1a202c', fontSize: 16, lineHeight: 1.75 }}>
                    {item.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>

          {/* Right: title + description + image */}
          <Box>
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
              Optimización
              <br />
              <Accent>fiscal</Accent>
            </Typography>
            <Typography sx={{ color: '#1a202c', fontSize: 18, lineHeight: 1.75, mb: 4 }}>
              Dependiendo del tipo y naturaleza del Trust, puede lograrse eficiencia fiscal en
              México y Estados Unidos, siempre cumpliendo los requisitos legales
            </Typography>
            <Box
              component="img"
              src="/assets/illustrations/PRIVATE_TRUST/P_PRIVATE_TRUST_02.png"
              alt="Optimización fiscal"
              sx={{ width: '100%', maxWidth: 500 }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
