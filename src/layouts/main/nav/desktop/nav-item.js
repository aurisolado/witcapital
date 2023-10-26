import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { forwardRef, useState } from 'react';
// @mui
import Box from '@mui/material/Box';
import CardActionArea from '@mui/material/CardActionArea';
import Link from '@mui/material/Link';
// routes
import { RouterLink } from 'src/routes/components';
// components
import Iconify from 'src/components/iconify';
//
import { Menu, Stack } from '@mui/material';
import { usePathname } from 'next/navigation';
import { ListItem } from './styles';

// ----------------------------------------------------------------------

function NavSubList({ items, isDashboard, subheader, onClose }) {
  const pathname = usePathname();

  return (
    <Stack
      spacing={2}
      flexGrow={1}
      alignItems="flex-start"
      sx={{
        p: 2,
        ...(isDashboard && {
          pb: 0,
          maxWidth: { md: 1 / 3, lg: 540 },
        }),
      }}
    >
      {items.map((item) =>
        isDashboard ? (
          <NavItemDashboard key={item.title} item={item} onClick={onClose} />
        ) : (
          <NavItem
            subItem
            key={item.title}
            item={item}
            active={pathname === `${item.path}/`}
            onClick={onClose}
          />
        )
      )}
    </Stack>
  );
}

export const NavItem = forwardRef(
  ({ item, open, offsetTop, active, subItem, externalLink, ...other }, ref) => {
    const { title, path, children } = item;

    const [anchorEl, setAnchorEl] = useState(null);
    const openmen = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const renderContent = (
      <div>
        <ListItem
          ref={ref}
          disableRipple
          offsetTop={offsetTop}
          subItem={subItem}
          active={active}
          open={open}
          {...other}
          onClick={handleClick}
        >
          {title}

          {!!children && <Iconify width={16} icon="eva:arrow-ios-downward-fill" sx={{ ml: 1 }} />}
        </ListItem>

        {children && (
          <Menu id="simple-menu" anchorEl={anchorEl} open={openmen} onClose={handleClose}>
            {children.map((list) => (
              <NavSubList
                key={list.subheader}
                subheader={list.subheader}
                items={list.items}
                isDashboard={list.subheader === 'Dashboard'}
              />
            ))}
          </Menu>
        )}
      </div>
    );

    // External link
    if (externalLink) {
      return (
        <Link href={path} target="_blank" rel="noopener" underline="none">
          {renderContent}
        </Link>
      );
    }

    // Has child
    if (children) {
      return renderContent;
    }

    // Default
    return (
      <div
        style={{
          verticalAlign: 'middle',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Link component={RouterLink} href={path} underline="none">
          {renderContent}
        </Link>
      </div>
    );
  }
);
// ----------------------------------------------------------------------

export function NavItemDashboard({ item, sx, ...other }) {
  return (
    <Link component={RouterLink} href={item.path} sx={{ width: 1, height: 1 }} {...other}>
      <CardActionArea
        sx={{
          height: 1,
          minHeight: 320,
          borderRadius: 1.5,
          color: 'text.disabled',
          bgcolor: 'background.neutral',
          px: { md: 3, lg: 10 },
          ...sx,
        }}
      >
        <m.div
          whileTap="tap"
          whileHover="hover"
          variants={{
            hover: { scale: 1.02 },
            tap: { scale: 0.98 },
          }}
        >
          <Box
            component="img"
            alt="illustration_dashboard"
            src="/assets/illustrations/illustration_dashboard.png"
          />
        </m.div>
      </CardActionArea>
    </Link>
  );
}

NavSubList.propTypes = {
  items: PropTypes.object,
  isDashboard: PropTypes.object,
  subheader: PropTypes.object,
  onClose: PropTypes.object,
};

NavItemDashboard.propTypes = {
  item: PropTypes.object,
  sx: PropTypes.object,
  other: PropTypes.object,
};

NavItem.propTypes = {
  item: PropTypes.object,
  open: PropTypes.object,
  offsetTop: PropTypes.object,
  active: PropTypes.object,
  subItem: PropTypes.object,
  externalLink: PropTypes.object,
  other: PropTypes.object,
};
