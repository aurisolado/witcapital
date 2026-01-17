// routes
import { paths } from 'src/routes/paths';
// config
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <Iconify icon="solar:file-bold-duotone" />,
  },
  {
    title: 'Áreas de Práctica',
    path: '/business',
    icon: <Iconify icon="solar:file-bold-duotone" />,
  },
  {
    title: 'Quienes Somos',
    path: '/about-us',
    icon: <Iconify icon="solar:file-bold-duotone" />,
  },
  {
    title: 'Personal',
    path: '/personal',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Personal',
        items: [
          { title: 'Private Trust', path: paths.privateTrust },
          { title: 'Inversión patrimonial', path: paths.inversionPatrimonial },
          { title: 'Mercado de divisas', path: paths.fxTrading },
          { title: 'Divisas & Stablecoins', path: paths.cashPassport },
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
          { title: 'Pagos Nacionales', path: paths.paymentsN },
          { title: 'Pagos Globales', path: paths.paymentsG },
          { title: 'Nearshoring & Offshore', path: paths.nearshoringandoffshore },
          { title: 'Divisas & Stablecoins', path: paths.divisas },
        ],
      },
    ],
  }
];
