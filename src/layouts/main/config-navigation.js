// routes
import { paths } from 'src/routes/paths';
// config
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/',
  },

  {
    title: 'Personal',
    path: '/personal',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Personal',
        items: [
          { title: 'Tarjeta Multidivisas', path: paths.cashPassport },
          { title: 'Fx Trading desk (pendiente)', path: paths.fxTrading },
          { title: 'Inversión patrimonial', path: paths.inversionPatrimonial },
          { title: 'Private Trust', path: paths.privateTrust },
        ],
      },
    ],
  },

  {
    title: 'Empresas',
    path: '/exchange',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Exchange',
        items: [
          { title: 'Compraventa de Cripto-Activos', path: paths.cryptocurrency },
          { title: 'Compraventa de Divisas', path: paths.cryptocurrency },
          { title: 'Nearshoring & Offshore (pendiente)', path: paths.cryptocurrency },
          { title: 'Pagos Nacionales e Internacionales (pendiente)', path: paths.cryptocurrency },
        ],
      },
    ],
  },

  {
    title: 'Áreas de Práctica',
    path: '/business',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Business',
        items: [
          //{ title: 'Asesoria Laboral', path: paths.business },
          { title: 'Consultoría Fiscal', path: paths.business },
          { title: 'Bancario y Financiero', path: paths.business },
          { title: 'Comercio Exterior y Aduanas', path: paths.business },
          { title: 'Asesoría Internacional', path: paths.business },
        ],
      },
    ],
  },
];
