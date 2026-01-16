import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CreateIcon from "@mui/icons-material/Create"; // quien establece reglas
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1"; // la persona que inicia
import UploadIcon from "@mui/icons-material/Upload"; // quien transfiere
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import FeatureCardsSection from 'src/components/sections/FeatureCardsSection';
import SplitSection from 'src/components/sections/SplitSection';
import TaxOptimization from './TaxOptimization';

export default function PrivateTrust() {
  return (
    <Box sx={{ overflow: 'hidden', position: 'relative' }}>

      <SplitSection
        imagePosition="right"
        bgcolor='#F5F7FA'
        title={
          <>
            Private Trust
          </>
        }
        description={
          <>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Un Private Trust en Estados Unidos es un instrumento legal que permite a un Fundador o Settlor (propietario de los activos) transferir bienes o derechos a un Fiduciario de confianza (Trustee).
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              El Trustee administra los activos en beneficio de los Beneficiarios designados, siguiendo las instrucciones que el Settlor establezca. Esta estructura brinda protección legal y flexibilidad para conservar y hacer crecer el patrimonio, tanto con fines personales como empresariales
            </Typography>
          </>
        }
        imageSrc="/assets/illustrations/PRIVATE_TRUST/P_PRIVATE_TRUST_01.png"
        imageAlt="PRIVATE_TRUST"
        imageFit="contain"
        py={{ xs: 6, md: 10 }}
      />

      <FeatureCardsSection
        title={
          <>
            Private Trust en Estados Unidos
          </>
        }
        cardVariant="white"
        cards={[
          {
            icon: <PersonAddAlt1Icon />,
            title: "Settlor",
            description: "Persona que transfiere sus activos al Trust y establece las reglas de administración y distribución",
          },
          {
            icon: <UploadIcon />,
            title: "Trustee",
            description: "Responsable de administrar los activos según las disposiciones del Settlor",
          },
          {
            icon: <CreateIcon />,
            title: "Beneficiarios",
            description: "Quienes reciben los beneficios del Trust conforme a las condiciones establecidas",
          },
        ]}
      />

      <FeatureCardsSection
        title={
          <>
            Beneficios Principales
          </>
        }
        cardVariant="white"
        bgcolor='#F5F7FA'
        cards={[
          {
            icon: <CheckCircleOutlineIcon />,
            title: "Preservación del patrimonio",
            description: "Preserva activos clave bajo una estructura familiar, asegurando su continuidad y beneficios para futuras generaciones",
          },
          {
            icon: <CheckCircleOutlineIcon />,
            title: "Optimización patrimonial",
            description: "Facilita la sucesión de bienes y protege a beneficiarios vulnerables, reduciendo costos y procesos legales",
          },
          {
            icon: <CheckCircleOutlineIcon />,
            title: "Protección de activos",
            description: "Protege el patrimonio ante riesgos legales y reduce la exposición a embargos, asegurando su estabilidad",
          },

          {
            icon: <CheckCircleOutlineIcon />,
            title: "Protección frente a acreedores",
            description: "El Trust protege los bienes de acreedores y garantiza la continuidad patrimonial en contextos complejos",
          },
          {
            icon: <CheckCircleOutlineIcon />,
            title: "Cumplimiento hereditario",
            description: "En jurisdicciones donde existe la figura de herederos obligatorios, el Trust permite planificar la distribución de manera estratégica y equitativa",
          },
          {
            icon: <CheckCircleOutlineIcon />,
            title: "Privacidad y flexibilidad",
            description: "Los Trusts ofrecen privacidad y permiten personalizar la distribución del patrimonio según las reglas del Settlor",
          },
        ]}
        ctaLabel="AGENDA UNA CITA"
        ctaHref="/contacto"
      />
      <TaxOptimization />
    </Box>
  );
}