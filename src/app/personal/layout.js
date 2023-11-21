'use client';

import PropTypes from 'prop-types';
import GreenLayout from 'src/layouts/main/layout-green';
// components

// ----------------------------------------------------------------------

export default function Layout({ children }) {
  return <GreenLayout>{children}</GreenLayout>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
