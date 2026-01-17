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
import Contact from '../contact';

// ----------------------------------------------------------------------

export default function BusinessView() {
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
              Áreas de Practica
            </>
          }
          description={
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                En Wit Biz, reunimos un equipo multidisciplinario con amplia experiencia y profundo conocimiento en cada una de nuestras áreas de práctica. Nuestro enfoque integral nos permite ofrecer soluciones legales y de negocios a nivel nacional e internacional, adaptadas tanto a inversionistas individuales como a organizaciones
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/AREAS DE PRACTICA/AREAS DE PRACTICA_01.png"
          imageAlt="Áreas de Practica"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />


        <SplitSection
          imagePosition="left"
          bgcolor='#FFFFFF'
          title={
            <>
              Consultoría fiscal
            </>
          }
          description={
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Ofrecemos asesoría fiscal combinando consultoría y litigio, para que personas y empresas cumplan sus obligaciones y optimicen su carga tributaria:
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Persona
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Ofrecemos estructuras eficientes para transacciones nacionales e internacionales, junto con defensa legal ante controversias fiscales.
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Empresa
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Optimizamos la rentabilidad mediante reestructuración estratégica y asesoría en auditorías y litigios fiscales.
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/AREAS DE PRACTICA/AREAS DE PRACTICA_02.png"
          imageAlt="Áreas de Practica"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />


        <SplitSection
          imagePosition="right"
          bgcolor='#F5F7FA'
          title={
            <>
              Bancario y financiero
            </>
          }
          description={
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Maximizamos el valor y la seguridad de tus operaciones financieras con un enfoque regulatorio sólido
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Persona
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Brindamos apoyo en la selección y administración de fondos de inversión, así como orientación en productos bancarios y cumplimiento de reportes regulatorios.
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Empresa
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Ofrecemos servicios de creación y gestión de fondos de capital privado, junto con el diseño de estrategias de financiamiento y el fortalecimiento de relaciones con clientes institucionales
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/AREAS DE PRACTICA/AREAS DE PRACTICA_03.png"
          imageAlt="Áreas de Practica"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />

        <SplitSection
          imagePosition="left"
          bgcolor='#FFFFFF'
          title={
            <>
              Comercio exterior y aduanas
            </>
          }
          description={
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Ofrecemos asesoría integral a quienes busquen capitalizar oportunidades globales, consolidando y fortaleciendo su posicionamiento en los mercados internacionales
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Persona
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Ofrecemos asesoría en procesos de importación y exportación, así como apoyo integral para inversionistas extranjeros que buscan establecerse o expandirse en México.
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Empresa
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Asesoramos en cumplimiento normativo y aprovechamiento de tratados comerciales como el T-MEC y la OMC, impulsando estrategias de nearshoring para optimizar la cadena de suministro.
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/AREAS DE PRACTICA/AREAS DE PRACTICA_04.png"
          imageAlt="Áreas de Practica"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />


        <SplitSection
          imagePosition="right"
          bgcolor='#F5F7FA'
          title={
            <>
              Asesoría Internacional
            </>
          }
          description={
            <>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Facilitamos la expansión y el crecimiento en mercados globales, cuidando la seguridad legal y financiera de cada proyecto
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Persona
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Diseñamos estructuras transfronterizas para proteger el patrimonio, cumpliendo normas internacionales y reduciendo riesgos
              </Typography>

              <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 2 }}>
                Empresa
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Diseñamos estrategias de internacionalización y brindamos protección legal y financiera en transacciones fuera de México.
              </Typography>
            </>
          }
          imageSrc="/assets/illustrations/AREAS DE PRACTICA/AREAS DE PRACTICA_05.png"
          imageAlt="Áreas de Practica"
          imageFit="contain"
          py={{ xs: 6, md: 10 }}
        />

        <Contact />
      </Box>
    </>
  );
}
