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


import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PublicIcon from "@mui/icons-material/Public";
import TuneIcon from "@mui/icons-material/Tune";
import FeatureCardsSection from 'src/components/sections/FeatureCardsSection';

// ----------------------------------------------------------------------

export default function NearshoringAndOffshoreView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Box

      >


        <SplitSection
          imagePosition="right"
          bgcolor='#F5F7FA'
          title={
            <>
              Nearshore & Offshore
            </>
          }
          description={
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                El mercado de divisas o Forex (Foreign Exchange) es el mercado financiero más grande y líquido del mundo, operando las 24 horas del día.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Aquí se negocian diferentes monedas con un volumen diario que supera los billones de dólares, ofreciendo oportunidades de rentabilidad a corto, mediano y largo plazo
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/E_NEARSHORE_OFFSHORE/01.png"
          imageAlt="E_NEARSHORE_OFFSHORE"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />


        <SplitSection
          imagePosition="left"
          bgcolor='#FFFFFF'
          title={
            <>
              Nearshoring
            </>
          }
          description={
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                El nearshoring consiste en trasladar parte de la producción o servicios a un país cercano, generalmente con husos horarios similares, lo que facilita la comunicación y reduce costos logísticos.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Caso de éxito: México
                Según “Kearney’s Global Services Location Index (GSLI) 2021”, México se mantiene como uno de los principales destinos de nearshoring para empresas estadounidenses, gracias a su ubicación geográfica y similitudes culturales.
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/E_NEARSHORE_OFFSHORE/02.png"
          imageAlt="E_NEARSHORE_OFFSHORE"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />




        <SplitSection
          imagePosition="right"
          bgcolor='#F5F7FA'
          title={
            <>
              Offshoring
            </>
          }
          description={
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                El offshoring implica la deslocalización de operaciones a un país lejano, por lo general para aprovechar costos laborales más bajos, incentivos fiscales o disponibilidad de talento especializado
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Caso de éxito: India
                De acuerdo con “Deloitte’s Global Outsourcing Survey 2022”, India sigue siendo un destino popular de offshoring en tecnología y servicios de TI, debido a la experiencia de su fuerza laboral y costos competitivos.
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/E_NEARSHORE_OFFSHORE/03.png"
          imageAlt="E_NEARSHORE_OFFSHORE"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />




        <FeatureCardsSection
          title={
            <>
              Nuestro rol como {' '}
              <Box component="span" sx={{ color: "primary.main" }}>aliados estratégicos</Box>
            </>
          }
          subtitle={'En Wit Biz, combinamos un profundo entendimiento de los mercados locales e internacionales con el respaldo de especialistas en regulación, logística y banca'}
          footerText="Con nuestra asesoría en Nearshore & Offshore, tu empresa podrá abordar la expansión internacional con seguridad, rentabilidad y una visión de largo plazo"
          cardVariant="white"

          cards={[
            {
              icon: <PsychologyIcon />,
              title: "Apoyo estratégico",
              description: "Desde el análisis de riesgos hasta la ejecución de estrategias de expansión, coordinando lo legal, financiero y operativo",
            },
            {
              icon: <TuneIcon />,
              title: "Soluciones a medida",
              description: "Ofrecemos cuentas internacionales, financiamiento y asesoría en divisas, con herramientas digitales para una gestión ágil de pagos globales",
            },
            {
              icon: <PublicIcon />,
              title: "Mas oportunidades",
              description: "Te asesoramos para optimizar costos con offshoring o mejorar eficiencia con nearshoring, fortaleciendo tus canales comerciales.",
            },
            {
              icon: <AutoGraphIcon />,
              title: "Crecimiento sólido",
              description: "Impulsamos relocalización estratégica para fomentar innovación y estabilidad en tu negocio",
            },
          ]}
        />
      </Box>
    </>
  );
}
