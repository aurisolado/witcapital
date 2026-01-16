'use client';

import { useScroll } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
// layouts
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import { Paper, Typography } from '@mui/material';
import FeatureCardsSection from 'src/components/sections/FeatureCardsSection';
import ImageCardsSection from 'src/components/sections/ImageCardsSection';
import SplitSection from 'src/components/sections/SplitSection';


import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShieldIcon from "@mui/icons-material/Shield";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";


import BalanceIcon from "@mui/icons-material/Balance";
import PublicIcon from "@mui/icons-material/Public";
import SpeedIcon from "@mui/icons-material/Speed";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
// ----------------------------------------------------------------------

export default function DivisasView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Box>

        <SplitSection
          imagePosition="right"
          bgcolor='#F5F7FA'
          title={
            <>
              Divisas & Stablecoins
            </>
          }
          description={
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                En Wit Biz ofrecemos soluciones en divisas y stablecoins para optimizar costos, agilizar pagos internacionales y fortalecer la estabilidad financiera en un entorno global competitivo
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/E_DIVISAS_STABLECOINS_01/01.png"
          imageAlt="E_DIVISAS_STABLECOINS_01"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />


        <Paper
          elevation={0}
          sx={{
            height: "100%",
            borderRadius: 0,
            pt: 5,
            pb: 5,
            bgcolor: "common.white",
            boxShadow: "0px 10px 25px rgba(15, 23, 42, 0.06)",
            border: "1px solid",
            borderColor: "grey.100",
          }}
        >
          <ImageCardsSection
            title={
              <>
                Estrategias financieras globales con divisas y{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  stablecoins
                </Box>
              </>
            }
            cards={[
              {
                imageSrc: "/assets/illustrations/E_DIVISAS_STABLECOINS_01/02.png",
                imageAlt: "Divisas",
                title: "Divisas",
                description:
                  "El peso, dólar y euro son claves en pagos globales. El mercado de divisas mueve más de 7 billones diarios, impulsando cobertura y competitividad.",
              },
              {
                imageSrc: "/assets/illustrations/E_DIVISAS_STABLECOINS_01/03.png",
                imageAlt: "Stablecoins",
                title: "Stablecoins",
                description:
                  "Stablecoins como PYUSD o USDC, ligadas al dólar, ofrecen pagos globales rápidos, estables y con bajas comisiones",
              },

            ]}
          />
        </Paper>

        <FeatureCardsSection
          title={
            <>
              Beneficios del {" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                mercado de divisas
              </Box>
            </>
          }
          cardVariant="white"
          bgcolor='#F5F7FA'
          cards={[
            {
              icon: <ManageAccountsIcon />,
              title: "Asesoría a medida",
              description: "Te asesoramos en el uso de stablecoins y en la optimización de divisas para reducir costos y riesgos cambiarios",
            },
            {
              icon: <ShieldIcon />,
              title: "Eficiencia y seguridad",
              description: "Agilizamos pagos globales con stablecoins, reduciendo costos, volatilidad y ampliando tu alcance",
            },
            {
              icon: <CurrencyExchangeIcon />,
              title: "Conversión instantánea",
              description: "Mitiga la volatilidad con conversiones rápidas a divisas y registra cada operación para un mayor control y cumplimiento fiscal",
            },

            {
              icon: <SupportAgentIcon />,
              title: "Soporte continuo",
              description: "Ofrecemos reportes estratégicos, capacitación en herramientas digitales y planes personalizados con total transparencia en costos",
            },

          ]}
        />



        <FeatureCardsSection
          title={
            <>
              Fundamentos de {" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                nuestra cultura
              </Box>
            </>
          }
          cardVariant="white"
          bgcolor='#FFFFFF'
          cards={[
            {
              icon: <TrendingDownIcon />,
              title: "Reducción de Costos",
              description: "Al minimizar intermediarios y optimizar la gestión de pagos, se reducen comisiones y tarifas",
            },
            {
              icon: <VerifiedUserIcon />,
              title: "Seguridad y Trazabilidad",
              description: "La tecnología blockchain ofrece cifrado de alto nivel y registros inalterables",
            },
            {
              icon: <SpeedIcon />,
              title: "Eficiencia Operativa",
              description: "Agiliza la administración de cobros y pagos globales, reduciendo tiempos de procesamiento",
            },

            {
              icon: <BalanceIcon />,
              title: "Menor Volatilidad",
              description: "Las stablecoins presentan fluctuaciones más bajas que otras criptomonedas, ideales para transacciones diarias",
            },
            {
              icon: <PublicIcon />,
              title: "Acceso a nuevos mercados",
              description: "Atrae a clientes que buscan métodos de pago digitales estables y confiables",
            },

          ]}
        />

      </Box>
    </>
  );
}
