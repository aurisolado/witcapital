import Box from '@mui/material/Box';

import AccountBalanceIcon from "@mui/icons-material/AccountBalance"; // banca / financiamiento
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // dinero / tasas
import CreditScoreIcon from "@mui/icons-material/CreditScore"; // crédito
import { Typography } from '@mui/material';
import FeatureCardsSection from 'src/components/sections/FeatureCardsSection';
import SplitSection from 'src/components/sections/SplitSection';
import REITs from './REITs';
import TrustsUsage from './TrustsUsage';

import GavelIcon from "@mui/icons-material/Gavel";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ShieldIcon from "@mui/icons-material/Shield";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PaymentsIcon from "@mui/icons-material/Payments";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import TouchAppIcon from "@mui/icons-material/TouchApp";

export default function InversionPatrimonial() {
  return (
    <Box sx={{ overflow: 'hidden', position: 'relative' }}>

      <SplitSection
        imagePosition="left"
        bgcolor='#F5F7FA'
        title={
          <>
            Inversión Patrimonial
          </>
        }
        description={
          <>
            <Typography variant="body1" sx={{ mb: 2 }}>
              En Wit Biz, diseñamos estrategias personalizadas para impulsar el crecimiento y la diversificación de tu patrimonio. Invertir en bienes raíces fuera de México, particularmente en Estados Unidos, puede generar ingresos por renta y plusvalía a mediano y largo plazo.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Nuestro equipo realiza análisis de mercado profundos, identificando zonas con alto potencial y tendencias inmobiliarias globales que permitan obtener rendimientos atractivos
            </Typography>
          </>
        }
        imageSrc="/assets/illustrations/P_INVERSION_PATRIMONIAL/P_INVERSION_PATRIMONIAL_01.png"
        imageAlt="P_INVERSION_PATRIMONIAL"
        imageFit="contain"
        py={{ xs: 6, md: 10 }}
      />

      <FeatureCardsSection
        title={
          <>
            Estados Unidos tu próximo paso financiero
          </>
        }
        cardVariant="white"
        cards={[
          {
            icon: <AccountBalanceIcon />,
            title: "Crecimiento Sólido",
            description: "Mercado dinámico y transparente que ofrece oportunidades para diversificar y proteger tu patrimonio en contextos económicos cambiantes.",
          },
          {
            icon: <AttachMoneyIcon />,
            title: "Financiamiento Competitivo",
            description: "Tasas de interés favorables y facilidades para inversionistas extranjeros, lo que eleva los márgenes de rentabilidad",
          },
          {
            icon: <CreditScoreIcon />,
            title: "Cobertura Cambiaria",
            description: "Al poseer activos en dólares, se mitiga el riesgo cambiario y se refuerza la diversificación del portafolio",
          },
        ]}
      />
      <REITs />

      <SplitSection
        imagePosition="right"
        bgcolor='#F5F7FA'
        title={
          <>
            Ventajas de los REITS
          </>
        }
        description={
          <>
            <Typography variant="body1">
              Los REITs permiten invertir en bienes raíces a través de acciones, sin necesidad de gestionar propiedades directamente
            </Typography>

          </>
        }
        imageSrc="/assets/illustrations/P_INVERSION_PATRIMONIAL/P_INVERSION_PATRIMONIAL_02.png"
        imageAlt="P_INVERSION_PATRIMONIAL_02"
        imageFit="contain"
        py={{ xs: 6, md: 10 }}
      />

      <FeatureCardsSection
        bgcolor='#F5F7FA'
        cardVariant="gray"
        cards={[
          {
            icon: <TouchAppIcon />,
            title: "Acceso Simple",
            description: "Inversión en bienes raíces sin trámites de compraventa ni gestión directa",
          },
          {
            icon: <AccountTreeIcon />,
            title: "Diversificación",
            description: "Activos repartidos en diferentes sectores y ubicaciones, disminuyendo riesgos",
          },
          {
            icon: <PaymentsIcon />,
            title: "Flujo Seguro",
            description: "Generan ingresos por alquiler y plusvalía, distribuyendo dividendos frecuentes",
          },
          {
            icon: <SwapHorizIcon />,
            title: "Liquidez",
            description: " Al cotizar en mercados bursátiles, es posible comprar o vender participaciones con agilidad",
          },

        ]}
      />

      <TrustsUsage />


      <FeatureCardsSection
        title={
          <>
            Nuestro servicio integral
          </>
        }
        subtitle={
          <>
            En Wit Biz, te acompañamos en cada fase de tu inversión en bienes raíces en Estados Unidos:
          </>
        }
        cardVariant="white"
        cards={[
          {
            icon: <ManageAccountsIcon />,
            title: "Asesoría personalizada",
            description: "Definimos tus objetivos financieros y evaluamos tu perfil de riesgo para recomendar inmuebles, REITs o esquemas de Trust adecuados",
          },
          {
            icon: <GavelIcon />,
            title: "Evaluación legal y fiscal",
            description: "Evaluamos tu perfil y objetivos para recomendar inversiones inmobiliarias y esquemas de Trust adecuados",
          },
          {
            icon: <TrackChangesIcon />,
            title: "Implementación y seguimiento",
            description: "Asistimos en la creación del Trust e inversión inmobiliaria, ajustando la estrategia según el rendimiento.",
          },
          {
            icon: <ShieldIcon />,
            title: "Transparencia y confidencialidad",
            description: "Resguardamos tu información y te mantenemos informado en todo momento, brindando un servicio seguro y confiable",
          },
          {
            description: "Invertir en bienes raíces internacionales, especialmente en EE. UU., permite diversificar y proteger tu patrimonio. En Wit Biz diseñamos estrategias con REITs y Trusts para maximizar rendimientos y reducir riesgos, con un acompañamiento profesional e integral.",
          },
        ]}
      />

    </Box>
  );
}