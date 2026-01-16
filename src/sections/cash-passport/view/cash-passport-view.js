'use client';

import { useScroll } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
// layouts
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import { Typography } from '@mui/material';
import SplitSection from 'src/components/sections/SplitSection';
import Explorar from '../Explorar';
import Usage from '../Usage';

import BoltIcon from "@mui/icons-material/Bolt";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ShieldIcon from "@mui/icons-material/Shield";
import FeatureCardsSection from 'src/components/sections/FeatureCardsSection';

import SchoolIcon from "@mui/icons-material/School";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import TuneIcon from "@mui/icons-material/Tune";

// ----------------------------------------------------------------------

export default function CashPassportView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Box>


        <SplitSection
          imagePosition="right"
          bgcolor='#ffffff'
          title={
            <>
              Divisas & Stablecoins
            </>
          }
          description={
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                En Wit Biz, te ofrecemos un servicio integral para la compra y venta de divisas y stablecoins, ayudándote a diversificar tus activos de manera segura y con respaldo regulatorio.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Nuestro compromiso es guiarte en cada paso, brindando transparencia y cumpliendo con la normativa vigente, de modo que tomes decisiones informadas y fortalezcas tu patrimonio
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/P_DIVISAS_STABLECOINS/HERO.png"
          imageAlt="P_DIVISAS_STABLECOINS"
          py={{ xs: 6, md: 10 }}
        />
        <Explorar />

        <FeatureCardsSection
          bgcolor='#FFFFFF'
          cardVariant="white"
          title={
            <>
              <Box component="span" sx={{ color: "primary.main" }}>Stablecoins</Box> la nueva cara del <Box component="span" sx={{ color: "primary.main" }}>dinero digital</Box>
            </>
          }
          subtitle={
            <>
              A diferencia de criptomonedas más volátiles generalmente una moneda fiduciaria como el dólar, lo que reduce las fluctuaciones bruscas de precio
            </>
          }
          cards={[
            {
              icon: <ShieldIcon />,
              title: "Mayor Estabilidad",
              description: "Minimiza el riesgo de movimientos extremos",
            },
            {
              icon: <BoltIcon />,
              title: "Rapidez y bajas comisiones",
              description: "Ideales para pagos y transferencias internacionales",
            },
            {
              icon: <CurrencyExchangeIcon />,
              title: "Conversión Inmediata",
              description: "Muchas plataformas permiten convertir stablecoins a divisas tradicionales casi al instante",
            },

          ]}
        />


        <FeatureCardsSection
          bgcolor='#F5F7FA'
          cardVariant="white"
          title={
            <>
              Tu <Box component="span" sx={{ color: "primary.main" }}>aliado financiero</Box> personal
            </>
          }
          subtitle={
            <>
              En Wit Biz, operamos bajo estrictas regulaciones que protegen tu información y tu capital. Realizamos transacciones con total claridad en comisiones y costos, fortaleciendo la confianza en cada operación. Asimismo, nos mantenemos al día con los requisitos legales de cada jurisdicción para que inviertas con la certeza de contar con un socio confiable
            </>
          }
          cards={[
            {
              icon: <SupportAgentIcon />,
              title: "Asesoria Integral",
              description: "Te orientamos en la compra y venta tanto de divisas físicas como de stablecoins",
            },
            {
              icon: <SchoolIcon />,
              title: "Capacitación Continua",
              description: "Asesoría en billeteras, plataformas y gestión de activos",
            },
            {
              icon: <TuneIcon />,
              title: "Atención Personalizada",
              description: "Creamos un plan personalizado que equilibra riesgo, rendimiento y seguridad",
            },

          ]}
          ctaLabel="AGENDA UNA CITA"
          ctaHref="/contacto"
        />
        <Usage />

      </Box>
    </>
  );
}
