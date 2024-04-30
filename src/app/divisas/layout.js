'use client';

import PropTypes from 'prop-types';
// components
import DarkLayout from 'src/layouts/main/layout-dark';
import GreenLayout from 'src/layouts/main/layout-green';

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return <GreenLayout>{children}</GreenLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
