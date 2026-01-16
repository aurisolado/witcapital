'use client';

// @mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import ImageCardsSection from 'src/components/sections/ImageCardsSection';
//

import { Container, Grid, Paper, Stack } from '@mui/material';

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


      <Box component="section" sx={{ bgcolor: '#F5F7FA', py: { xs: 6, md: 10 } }}>
        <Container maxWidth={"lg"} >
          <Grid container alignItems="center">
            {/* TEXT */}
            <Grid item xs={12} md={12} alignItems="center">
              <Stack spacing={2.5}>
                <Typography variant="h1" sx={{ textAlign: 'center' }}>
                  Pagos Internacionales
                </Typography>

                <Typography variant="h6" sx={{ color: "text.secondary", textAlign: 'center' }}>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    En Wit Biz, proporcionamos soluciones financieras internacionales confiables para empresas mexicanas que buscan consolidar su presencia global. Contamos con registro y autorización como transmisor de dinero ante la CNBV, cumpliendo con la Ley General de Organizaciones y Actividades Auxiliares del Crédito y los más altos estándares de transparencia
                  </Typography>
                </Typography>
              </Stack>
            </Grid>


          </Grid>
        </Container>
      </Box>


      <Paper
        elevation={0}
        sx={{
          height: "100%",
          borderRadius: 0,
          pt: 5,
          pb: 5,
          bgcolor: "common.white",
          boxShadow: "0px 10px 25px rgba(15, 23, 42, 0.06)",
          border: "1px solid",
          borderColor: "grey.100",
        }}
      >
        <ImageCardsSection
          title={
            <>
              Transferencias internacionales{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                rápidas y seguras
              </Box>
            </>
          }
          subtitle="Conectamos a tu empresa con aliados, proveedores y clientes en más de 100 países, permitiéndote competir y fortalecer tu presencia en el mercado mundia"
          cards={[
            {
              imageSrc: "/assets/illustrations/E_PAGOS_INTERNACIONALES/E_PAGOS INTERNACIONALES_01.png",
              imageAlt: "Eficiencia y seguridad",
              title: "Eficiencia y seguridad",
              description:
                "Perfectas para viáticos, gastos operativos o bonificaciones al personal.",
            },
            {
              imageSrc: "/assets/illustrations/E_PAGOS_INTERNACIONALES/E_PAGOS INTERNACIONALES_02.png",
              imageAlt: "Cambio competitivo",
              title: "Cambio competitivo",
              description:
                "Ideales para compras en línea o gastos específicos, brindando un control inmediato y seguro",
            },
            {
              imageSrc: "/assets/illustrations/E_PAGOS_INTERNACIONALES/E_PAGOS INTERNACIONALES_03.png",
              imageAlt: "Cambio competitivo",
              title: "Cobertura global",
              description:
                "Ideales para compras en línea o gastos específicos, brindando un control inmediato y seguro",
            },

          ]}
        />
      </Paper>


      <Box component="section" sx={{ bgcolor: '#F5F7FA', py: { xs: 6, md: 10 } }}>
        <Container maxWidth={"lg"} >
          <Grid container alignItems="center">
            {/* TEXT */}
            <Grid item xs={12} md={12} alignItems="center">
              <Stack spacing={2.5}>

                <Typography variant="h6" sx={{ color: "text.secondary", textAlign: 'center' }}>
                  <Typography variant="body1" sx={{ mb: 2 }}>
                    Con Pagos Internacionales de Wit Biz, tu negocio contará con un aliado sólido, confiable y ágil para gestionar sus operaciones globales y traspasar fronteras
                  </Typography>
                </Typography>
              </Stack>
            </Grid>


          </Grid>
        </Container>
      </Box>





    </Box>

  );
}
