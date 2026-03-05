'use client';

import { useScroll } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import { Typography } from '@mui/material';
import SplitSection from 'src/components/sections/SplitSection';
import Contact from '../contact';

// ----------------------------------------------------------------------

export default function BusinessView() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />

      <Box>

        {/* HERO — Áreas de Practica */}
        <SplitSection
          imagePosition="right"
          bgcolor="#F5F7FA"
          title={<>Áreas de Practica</>}
          description={
            <Typography variant="body1" sx={{ mb: 2 }}>
              En Wit Biz, reunimos un equipo multidisciplinario con amplia experiencia y profundo conocimiento en cada una de nuestras áreas de práctica. Nuestro enfoque integral nos permite ofrecer soluciones legales y de negocios a nivel nacional e internacional, adaptadas tanto a inversionistas individuales como a organizaciones
            </Typography>
          }
          imageSrc="/assets/illustrations/AREAS DE PRACTICA/AREAS DE PRACTICA_01.png"
          imageAlt="Áreas de Practica"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />

        {/* 1. Consultoría fiscal */}
        <SplitSection
          imagePosition="left"
          bgcolor="#FFFFFF"
          titleVariant="h2"
          title={<>Consultoría fiscal</>}
          description={
            <>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Ofrecemos asesoría fiscal combinando consultoría y litigio, para que personas y empresas cumplan sus obligaciones y optimicen su carga tributaria:
              </Typography>
              <Typography variant="h5" sx={{ mb: 1 }}>Persona</Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Ofrecemos estructuras eficientes para transacciones nacionales e internacionales, junto con defensa legal ante controversias fiscales.
              </Typography>
              <Typography variant="h5" sx={{ mb: 1 }}>Empresa</Typography>
              <Typography variant="body1">
                Optimizamos la rentabilidad mediante reestructuración estratégica y asesoría en auditorías y litigios fiscales.
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/AREAS DE PRACTICA/AREAS DE PRACTICA_02.png"
          imageAlt="Consultoría fiscal"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />

        {/* 2. Bancario y financiero */}
        <SplitSection
          imagePosition="right"
          bgcolor="#F5F7FA"
          titleVariant="h2"
          title={<>Bancario y financiero</>}
          description={
            <>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Maximizamos el valor y la seguridad de tus operaciones financieras con un enfoque regulatorio sólido
              </Typography>
              <Typography variant="h5" sx={{ mb: 1 }}>Persona</Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Brindamos apoyo en la selección y administración de fondos de inversión, así como orientación en productos bancarios y cumplimiento de reportes regulatorios.
              </Typography>
              <Typography variant="h5" sx={{ mb: 1 }}>Empresa</Typography>
              <Typography variant="body1">
                Ofrecemos servicios de creación y gestión de fondos de capital privado, junto con el diseño de estrategias de financiamiento y el fortalecimiento de relaciones con clientes institucionales
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/AREAS DE PRACTICA/AREAS DE PRACTICA_03.png"
          imageAlt="Bancario y financiero"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />

        {/* 3. Asesoría Internacional */}
        <SplitSection
          imagePosition="left"
          bgcolor="#FFFFFF"
          titleVariant="h2"
          title={<>Asesoría Internacional</>}
          description={
            <>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Facilitamos la expansión y el crecimiento en mercados globales, cuidando la seguridad legal y financiera de cada proyecto
              </Typography>
              <Typography variant="h5" sx={{ mb: 1 }}>Persona</Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Diseñamos estructuras transfronterizas para proteger el patrimonio, cumpliendo normas internacionales y reduciendo riesgos
              </Typography>
              <Typography variant="h5" sx={{ mb: 1 }}>Empresa</Typography>
              <Typography variant="body1">
                Diseñamos estrategias de internacionalización y brindamos protección legal y financiera en transacciones fuera de México.
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/AREAS DE PRACTICA/AREAS DE PRACTICA_04.png"
          imageAlt="Asesoría Internacional"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />

        {/* 4. Laboral */}
        <SplitSection
          imagePosition="right"
          bgcolor="#F5F7FA"
          titleVariant="h2"
          title={<>Laboral</>}
          description={
            <>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Ofrecemos soluciones laborales que priorizan la eficacia y el cumplimiento normativo, adaptadas a diversos contextos
              </Typography>
              <Typography variant="h5" sx={{ mb: 1 }}>Persona</Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Ofrecemos apoyo en la formalización de contratos y adaptación a reformas laborales, así como asesoría en acuerdos de confidencialidad y reparto de utilidades
              </Typography>
              <Typography variant="h5" sx={{ mb: 1 }}>Empresa</Typography>
              <Typography variant="body1">
                Brindamos servicios de gestión de capital humano, contratación de expatriados y auditorías, junto con estrategias para la prevención de riesgos laborales y el cumplimiento en materia de subcontratación.
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/AREAS DE PRACTICA/AREAS DE PRACTICA_05.png"
          imageAlt="Laboral"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />

        {/* Compromiso con nuestros clientes */}
        <Contact />

        {/* 5. Comercio exterior y aduanas */}
        <SplitSection
          imagePosition="left"
          bgcolor="#FFFFFF"
          titleVariant="h2"
          title={<>Comercio exterior y aduanas</>}
          description={
            <>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Ofrecemos asesoría integral a quienes busquen capitalizar oportunidades globales, consolidando y fortaleciendo su posicionamiento en los mercados internacionales
              </Typography>
              <Typography variant="h5" sx={{ mb: 1 }}>Persona</Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Ofrecemos asesoría en procesos de importación y exportación, así como apoyo integral para inversionistas extranjeros que buscan establecerse o expanderse en México.
              </Typography>
              <Typography variant="h5" sx={{ mb: 1 }}>Empresa</Typography>
              <Typography variant="body1">
                Asesoramos en cumplimiento normativo y aprovechamiento de tratados comerciales como el T-MEC y la OMC, impulsando estrategias de nearshoring para optimizar la cadena de suministro.
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/AREAS DE PRACTICA/AREAS DE PRACTICA_06.png"
          imageAlt="Comercio exterior y aduanas"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />

      </Box>
    </>
  );
}
