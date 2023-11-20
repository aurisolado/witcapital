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
    title: 'Exchange',
    path: '/exchange',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Exchange',
        items: [
          { title: 'Cryptocurrency', path: paths.cryptocurrency },
          { title: 'Divisas', path: paths.cryptocurrency },
          { title: 'Transmisor de dinero (pendiente)', path: paths.cryptocurrency },
        ],
      },
    ],
  },
  {
    title: 'Personal',
    path: '/personal',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Personal',
        items: [
          { title: 'Cash Paspost', path: paths.cryptocurrency },
          { title: 'Fx Trading desk (pendiente)', path: paths.cryptocurrency },
          { title: 'Inversión patrimonial', path: paths.cryptocurrency },
          { title: 'Private trust', path: paths.cryptocurrency },
        ],
      },
    ],
  },
  {
    title: 'Business',
    path: '/business',
    icon: <Iconify icon="solar:file-bold-duotone" />,
    children: [
      {
        subheader: 'Business',
        items: [
          { title: 'Asesoria Laboral', path: paths.business },
          { title: 'Bancario / Financiero', path: paths.business },
          { title: 'Comercio exterior y aduanas', path: paths.business },
          { title: 'Consultoría Fiscal', path: paths.business },
          { title: 'Consultoría Internacional', path: paths.business },
        ],
      },
    ],
  },
];
