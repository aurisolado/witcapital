// routes
import { paths } from 'src/routes/paths';
// config
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Servicios',
    path: '#',
    color: 'cta',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Personal',
        items: [
          { title: 'Inversión Patrimonial', path: paths.inversionPatrimonial },
          { title: 'Private Trust', path: paths.privateTrust },
          { title: 'Mercado de Divisas', path: paths.fxTrading },
          { title: 'Divisas & Stablecoins', path: paths.cashPassport },
        ],
      },
      {
        subheader: 'Empresariales',
        items: [
          { title: 'Pagos Internacionales', path: paths.paymentsG },
          { title: 'Pagos nacionales', path: paths.paymentsN },
          { title: 'Nearshore & Offshore', path: paths.nearshoringandoffshore },
          { title: 'Divisas & Stablecoins', path: paths.divisas },
        ],
      },
    ],
  },
  {
    title: 'Prácticas',
    path: '/business',
    color: 'cta',
    icon: <Iconify icon="solar:file-bold-duotone" />,
  },
];
