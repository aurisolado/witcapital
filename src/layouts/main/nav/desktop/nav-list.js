import PropTypes from 'prop-types';

import { useEffect } from 'react';
// @mui
// hooks
import { useBoolean } from 'src/hooks/use-boolean';
// routes
import { usePathname } from 'src/routes/hooks';
import { useActiveLink } from 'src/routes/hooks/use-active-link';
//
import { NavItem } from './nav-item';
// ----------------------------------------------------------------------

export default function NavList({ item, offsetTop, sx, color }) {
  const pathname = usePathname();

  const nav = useBoolean();

  const { path } = item;

  const active = useActiveLink(path, false);

  const externalLink = path.includes('http');

  useEffect(() => {
    if (nav.value) {
      nav.onFalse();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <NavItem
      item={item}
      offsetTop={offsetTop}
      active={active}
      open={nav.value}
      externalLink={externalLink}
      sx={sx}
      color={color}
    />
  );
}

NavList.propTypes = {
  item: PropTypes.object,
  offsetTop: PropTypes.object,
  sx: PropTypes.object,
};
