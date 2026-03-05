'use client';

import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useScroll } from 'framer-motion';
import ScrollProgress from 'src/components/scroll-progress';
import FeatureCardsSection from 'src/components/sections/FeatureCardsSection';
import SplitSection from 'src/components/sections/SplitSection';


import GroupsIcon from "@mui/icons-material/Groups";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PolicyIcon from "@mui/icons-material/Policy";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import ShieldIcon from "@mui/icons-material/Shield";
import TimelineIcon from "@mui/icons-material/Timeline";

// ----------------------------------------------------------------------

export default function AboutView() {
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
              Quienes somos
            </>
          }
          description={
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Somos una entidad financiera mexicana con presencia internacional, regulada por la CNBV. Brindamos soluciones financieras estratégicas e innovadoras para personas y empresas que operan en mercados nacionales e internacionales.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Contamos con un equipo multidisciplinario con experiencia jurídica, financiera y tecnológica, que ofrece asesoría personalizada y soluciones a la medida, enfocadas en generar resultados concretos y efectivos.
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/QUIENES SOMOS/QUIENES SOMOS_01.png"
          imageAlt="Áreas de Practica"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />


        <SplitSection
          imagePosition="left"
          bgcolor='#FFFFFF'
          titleVariant="h2"
          title={
            <>
              Fundamentos {' '}
              <Box component="span" sx={{ color: "primary.main" }}>
                estratégicos
              </Box>
            </>
          }
          description={
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Impulsamos el crecimiento sostenible de personas y empresas mediante soluciones financieras integrales, innovadoras y personalizadas.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Con un enfoque multidisciplinario, transparencia y alto compromiso normativo, aspiramos a ser una institución financiera de referencia a nivel nacional e internacional, generando valor estratégico y desarrollo en cada entorno donde operamos.
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/QUIENES SOMOS/QUIENES SOMOS_02.png"
          imageAlt="Áreas de Practica"
          imageFit="contain"
          ctaHref={'#'}
          ctaLabel={'AGENDA UNA CITA'}
          py={{ xs: 6, md: 10 }}
        />


        <FeatureCardsSection
          title={
            <>
              Fundamentos de nuestra cultura
            </>
          }
          cardVariant="white"
          bgcolor='#F5F7FA'
          cards={[
            {
              icon: <VerifiedUserIcon />,
              title: "Integridad",
              description: "Cumplimos con la normativa y actuamos con honestidad, protegiendo siempre los intereses de nuestros clientes",
            },
            {
              icon: <LightbulbIcon />,
              title: "Innovación",
              description: "Diseñamos soluciones creativas y a la vanguardia, adaptadas a las tendencias globales y a cada cliente",
            },
            {
              icon: <ManageAccountsIcon />,
              title: "Enfoque al cliente",
              description: "Entendemos a fondo los objetivos de cada cliente para crear estrategias duraderas y generar resultados reales",
            },
            {
              icon: <GroupsIcon />,
              title: "Excelencia Colaborativa",
              description: "Promovemos el trabajo en equipo y el aprendizaje continuo para ofrecer asesoría integral y efectiva.",
            },
            {
              icon: <PolicyIcon />,
              title: "Transparencia y cumplimiento",
              description: "Operamos con claridad y rigor, cumpliendo los más altos estándares en cada transacción y servicio",
            }

          ]}
        />


        <FeatureCardsSection
          title={
            <>
              Planificación <Box component="span" sx={{ color: "primary.main" }}>
                estratégica
              </Box> y enfoque personalizado
            </>
          }
          cardVariant="white"
          bgcolor='#FFFFFF'
          cards={[
            {
              icon: <ManageSearchIcon />,
              title: "Análisis Exahustivo",
              description: "Definimos metas claras y aplicamos metodologías enfocadas en maximizar resultados y minimizar costos",
            },
            {
              icon: <ShieldIcon />,
              title: "Gestión de Riesgos",
              description: "Alineamos nuestras estrategias a los objetivos del cliente, anticipando y mitigando riesgos presentes y futuros",
            },
            {
              icon: <TimelineIcon />,
              title: "Visión a Largo Plazo",
              description: "Buscamos impulsar un crecimiento sostenible a través de estructuras y herramientas financieras bien diseñadas",
            },


          ]}
        />


      </Box>
    </>
  );
}
