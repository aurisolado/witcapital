import Box from '@mui/material/Box';
import PersonaServices from './sections/PersonaServices';
import EmpresaServices from './sections/EmpresaServices';
import SplitSection from 'src/components/sections/SplitSection';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ overflow: 'hidden', position: 'relative' }}>

      <SplitSection
        imagePosition="right"
        title={
          <>
            Tu <Box component="span" sx={{ color: "primary.main" }}>crecimiento</Box> es nuestro <Box component="span" sx={{ color: "primary.main" }}>compromiso</Box>
          </>
        }
        description={
          <>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Soluciones financieras confiables e innovadoras para personas y empresas que miran hacia el futuro
            </Typography>
          </>
        }
        ctaLabel="CONTÁCTANOS"
        ctaHref="/contacto"
        imageSrc="/assets/illustrations/HOME/HOME_01.png"
        imageAlt="Mapa y conexiones de divisas"
        imageFit="contain"
        py={{ xs: 6, md: 10 }}
      />


      <PersonaServices />
      <EmpresaServices />

      <SplitSection
        imagePosition="left"
        //bgcolor='#eff4d8'
        title={
          <>
            Crecimiento <br></br>
            <Box component="span" sx={{ color: "primary.main" }}>inteligente</Box>
          </>
        }
        description={
          <>
            <Typography variant="body1" sx={{ mb: 2 }}>
              En Wit Biz ofrecemos un servicio financiero integral diseñado para diversificar tu patrimonio o fortalecer tu empresa, combinando innovación tecnológica, experiencia internacional y soluciones personalizadas.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2 }}>
              Nuestro equipo domina los marcos regulatorios de México y EE. UU., mientras nuestras plataformas seguras y automatizadas optimizan procesos, reducen costos y te brindan acompañamiento continuo para impulsar tu crecimiento.
            </Typography>
          </>
        }
        imageSrc="/assets/illustrations/HOME/HOME_10.png"
        imageAlt="Crecimiento inteligente"
        imageFit="contain"
        py={{ xs: 6, md: 10 }}
      />
    </Box>
  );
}