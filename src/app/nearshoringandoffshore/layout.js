'use client';

import PropTypes from 'prop-types';
// components
import DarkLayout from 'src/layouts/main/layout-dark';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return <DarkLayout>{children}</DarkLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
