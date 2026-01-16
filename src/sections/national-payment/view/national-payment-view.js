'use client';

// @mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import FeatureCardsSection from 'src/components/sections/FeatureCardsSection';
import ImageCardsSection from 'src/components/sections/ImageCardsSection';
//
import SplitSection from 'src/components/sections/SplitSection';
import TabSection from 'src/components/sections/TabSection';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// ----------------------------------------------------------------------

export default function NationalPaymentView() {

  const [tab, setTab] = useState("cards");

  const tabs = [
    { id: "cards", label: "TIPOS DE TARJETAS" },
    { id: "bank", label: "BANCA DIGITAL" },
    { id: "pay", label: "PAGOS Y TERMINALES" },
  ];

  return (
    <Box sx={{ overflow: 'hidden', position: 'relative' }}>

      <SplitSection
        imagePosition="left"
        bgcolor='#FFFFFF'
        title={
          <>
            Pagos Nacionales
          </>
        }
        description={
          <>
            <Typography variant="body1" sx={{ mb: 2 }}>
              En Wit Biz, transformamos la forma en que las empresas gestionan sus pagos nacionales a través de un ecosistema digital integral. Nuestro objetivo es automatizar procesos, optimizar la administración de ingresos y el control de gastos, ofreciendo herramientas que se adaptan al crecimiento y las necesidades de cada organización
            </Typography>
          </>
        }
        imageSrc="/assets/illustrations/E_PAGOS NACIONALES/E_PAGOS NACIONALES_01_01.png"
        imageAlt="E_PAGOS NACIONALES"
        imageFit="contain"
        py={{ xs: 6, md: 10 }}
      />

      <TabSection
        variant='gray'
        tabs={tabs}
        value={tab}
        onChange={setTab}
        childrenById={{
          cards: <ImageCardsSection
            title={
              <>
                Tipos de{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  tarjetas
                </Box>
              </>
            }
            subtitle="Agiliza la administración de gastos empresariales con tarjetas prepagadas, tanto físicas como virtuales, emitidas bajo lineamientos de instituciones reconocidas. Disfruta de cobertura global y seguridad ante cada operación."
            cards={[
              {
                imageSrc: "/assets/illustrations/E_PAGOS NACIONALES/E_PAGOS NACIONALES_01_02.png",
                imageAlt: "Eficiencia y seguridad",
                title: "Físicas",
                description:
                  "Perfectas para viáticos, gastos operativos o bonificaciones al personal.",
              },
              {
                imageSrc: "/assets/illustrations/E_PAGOS NACIONALES/E_PAGOS NACIONALES_01_03.png",
                imageAlt: "Cambio competitivo",
                title: "Virtuales",
                description:
                  "Ideales para compras en línea o gastos específicos, brindando un control inmediato y seguro",
              },

            ]}
          />,
          bank: <FeatureCardsSection
            title={
              <>
                Ventajas{" "}
                <Box component="span" sx={{ color: "primary.main" }}>
                  destacadas
                </Box>
              </>
            }
            subtitle='Nuestra Banca Digital es una plataforma completa que te permite concentrar en un solo lugar el control de ingresos, gastos, pagos a proveedores y nómina. Beneficios de la Banca Digital:'
            cardVariant="white"
            bgcolor='#FFFFFF'
            cards={[
              {
                icon: <CheckCircleOutlineIcon />,
                description: "Automatización de pagos y generación de reportes financieros personalizados",
              },
              {
                icon: <CheckCircleOutlineIcon />,
                description: "Optimización del flujo de caja con datos fiables en tiempo real",
              },
              {
                icon: <CheckCircleOutlineIcon />,
                description: "Reducción de la carga administrativa al unificar operaciones bancarias en una sola plataforma",
              },

              {
                icon: <CheckCircleOutlineIcon />,
                description: "Mayor control de ingresos y egresos, favoreciendo una planeación financiera sólida",
              },

            ]}
          />,
          pay: <Box sx={{ overflow: 'hidden', position: 'relative' }}>

            <FeatureCardsSection

              subtitle='Optimiza la experiencia de compra y reduce los tiempos de espera con soluciones de cobro flexibles y seguras'
              cardVariant="white"
              bgcolor='#FFFFFF'
              cards={[
                {
                  title: "Terminales",
                  description: "Acepta pagos con tarjetas de débito y crédito en tu establecimiento de forma ágil y confiable.",
                },
                {
                  title: "Enlaces de Pago",
                  description: "Envía enlaces por correo electrónico, SMS o aplicaciones de mensajería para que tus clientes realicen pagos a distancia, sin necesidad de contar con una terminal física.",
                }

              ]}
            />



            <FeatureCardsSection
              title={
                <>
                  Ventajas destacadas
                </>
              }

              cardVariant="white"
              bgcolor='#FFFFFF'
              cards={[
                {
                  icon: <CheckCircleOutlineIcon />,
                  description: "Reducción de tiempos de espera y simplificación de procesos de cobro",
                },
                {
                  icon: <CheckCircleOutlineIcon />,
                  description: "Experiencia de compra moderna y flexible",
                },
                {
                  icon: <CheckCircleOutlineIcon />,
                  description: "Transacciones seguras con soporte para pagos diferidos y múltiples métodos de pago",
                },

                {
                  icon: <CheckCircleOutlineIcon />,
                  description: "Integración directa con la Banca Digital de Wit Biz, para centralizar ingresos y optimizar la gestión financiera",
                },

              ]}
            />



          </Box>,
        }}
        wrapContent={true}
        contentVariant="panel"
        contentSx={{
          maxWidth: 980,
          mx: "auto",
        }}
      />



      <FeatureCardsSection
        title={
          <>
            Beneficios
          </>
        }
        subtitle={
          <>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Con nuestras soluciones de Pagos Nacionales, modernizas tus métodos de cobro, centralizas las finanzas y gestionas mejor tus gastos.
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              En Wit Biz, te acompañamos para convertir cada transacción en una oportunidad de crecimiento
            </Typography>
          </>
        }
        cardVariant="white"
        bgcolor='#FFFFFF'
        cards={[
          {
            icon: <CheckCircleOutlineIcon />,
            description: "Separación clara de gastos personales y empresariales",
          },
          {
            icon: <CheckCircleOutlineIcon />,
            description: "Optimización de viáticos, presupuestos y bonos corporativos",
          },
          {
            icon: <CheckCircleOutlineIcon />,
            description: "Configuraciones de uso y alertas en tiempo real para mayor seguridad",
          },

          {
            icon: <CheckCircleOutlineIcon />,
            description: "Visibilidad total de cada operación, reduciendo riesgos de mal uso de recursos.",
          },

        ]}
      />

    </Box>

  );
}
