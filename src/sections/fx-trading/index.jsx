import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FeatureCardsSection from 'src/components/sections/FeatureCardsSection';
import SplitSection from 'src/components/sections/SplitSection';
import Compromiso from './Compromiso';
import ServiceIntegral from './ServiceIntegral';

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import InsightsIcon from "@mui/icons-material/Insights";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SchoolIcon from "@mui/icons-material/School";

export default function FxTrading() {
  return (
    <Box sx={{ overflow: 'hidden', position: 'relative' }}>



      <SplitSection
        imagePosition="right"
        bgcolor='#F5F7FA'
        title={
          <>
            Trading de Divisas
          </>
        }
        description={
          <>
            <Typography variant="body1" sx={{ mb: 2 }}>
              El mercado de divisas o Forex (Foreign Exchange) es el mercado financiero más grande y líquido del mundo, operando las 24 horas del día.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Aquí se negocian diferentes monedas con un volumen diario que supera los billones de dólares, ofreciendo oportunidades de rentabilidad a corto, mediano y largo plazo
            </Typography>
          </>
        }
        imageSrc="/assets/illustrations/P_MERDADO_DE_DIVISAS/HERO.png"
        imageAlt="P_MERDADO_DE_DIVISAS"
        imageFit="contain"
        ctaLabel="CONTÁCTANOS"
        ctaHref="/contacto"
        py={{ xs: 6, md: 10 }}
      />

      <FeatureCardsSection
        title={
          <>
            Beneficios del Mercado de Divisas
          </>
        }
        cardVariant="white"
        cards={[
          {
            icon: <SwapHorizIcon />,
            title: "Alta liquidez",
            description: "La alta participación en el mercado permite ejecutar operaciones rápidamente y aprovechar cambios inmediatos",
          },
          {
            icon: <AccessTimeIcon />,
            title: "Disponible 24/7",
            description: "Disponible 24/5, se adapta a todos los husos horarios y perfiles de inversión",
          },
          {
            icon: <AccountTreeIcon />,
            title: "Diversificación",
            description: "Invertir en divisas diversifica tu portafolio y reduce riesgos geográficos.",
          },
          {
            icon: <TrendingUpIcon />,
            title: "Apalancamiento",
            description: "Puedes operar con apalancamiento, aumentando potencial de ganancia y riesgo",
          },
        ]}
      />


      <FeatureCardsSection
        bgcolor='#F5F7FA'
        cardVariant="gray"
        title={
          <>
            Asesores en <Box component="span" sx={{ color: "primary.main" }}>Inversiones</Box>
          </>
        }
        subtitle={
          <>
            En Wit Biz, contamos con un equipo especializado en Forex que combina experiencia, conocimiento técnico y visión estratégica del entorno global. Te ofrecemos:
          </>
        }
        cards={[
          {
            icon: <PsychologyIcon />,
            title: "Análisis Personalizado",
            description: "Revisamos tu perfil de riesgo y objetivos financieros para definir la mejor estrategia de inversión ",
          },
          {
            icon: <InsightsIcon />,
            title: "Herramientas de vanguardia",
            description: "Empleamos plataformas y metodologías de análisis técnico y fundamental para detectar oportunidades con mayor precisión ",
          },
          {
            icon: <SchoolIcon />,
            title: "Educación continua",
            description: "Brindamos capacitaciones y reportes regulares para que tomes decisiones basadas en información sólida",
          },

        ]}
      />

      <Compromiso />
      <ServiceIntegral />
    </Box>
  );
}