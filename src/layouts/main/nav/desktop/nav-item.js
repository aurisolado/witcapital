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
import { ListItem, ListSubItem } from './styles';

// ----------------------------------------------------------------------

function NavSubList({ items, isDashboard, subheader, onClose }) {
  const pathname = usePathname();

  return (
    <Stack
      spacing={0}
      flexGrow={1}
      alignItems="flex-start"
      sx={{
        ...(isDashboard && {
          pb: 0,
          maxWidth: { md: 1 / 3, lg: 540 },
        }),
      }}
    >
      {subheader && (
        <Box
          sx={{
            px: '20px',
            pt: '10px',
            pb: '4px',
            fontFamily: '"DM Sans", Helvetica, Arial, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            color: '#C2D565',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            width: '100%',
          }}
        >
          {subheader}
        </Box>
      )}
      {items.map((item) =>
        isDashboard ? (
          <NavItemDashboard key={item.title} item={item} onClick={onClose} />
        ) : (
          <NavSubItem
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

export const NavSubItem = forwardRef(
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
      <div
        style={{
          verticalAlign: 'middle',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ListSubItem
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
        </ListSubItem>

        {children && (
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={openmen}
            onClose={handleClose}
            PaperProps={{
              sx: {
                bgcolor: '#0b0e27',
                borderRadius: '0px',
                boxShadow: '0 8px 24px rgba(11,14,39,0.3)',
                minWidth: 180,
                '& .MuiList-root': { padding: '4px 0' },
              },
            }}
          >
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

export const NavItem = forwardRef(
  ({ item, open, offsetTop, active, subItem, externalLink, color, ...other }, ref) => {
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
      <div
        style={{
          verticalAlign: 'middle',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ListItem
          ref={ref}
          disableRipple
          offsetTop={offsetTop}
          subItem={subItem}
          active={active}
          color={color}
          open={open}
          {...other}
          onClick={handleClick}
        >
          {title}

          {!!children && <Iconify width={16} icon="eva:arrow-ios-downward-fill" sx={{ ml: 1 }} />}
        </ListItem>

        {children && (
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={openmen}
            onClose={handleClose}
            PaperProps={{
              sx: {
                bgcolor: '#0b0e27',
                borderRadius: '0px',
                boxShadow: '0 8px 24px rgba(11,14,39,0.3)',
                minWidth: 180,
                '& .MuiList-root': { padding: '4px 0' },
              },
            }}
          >
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
  items: PropTypes.array,
  isDashboard: PropTypes.bool,
  subheader: PropTypes.string,
  onClose: PropTypes.func,
};

NavItemDashboard.propTypes = {
  item: PropTypes.object,
  sx: PropTypes.object,
};

NavItem.propTypes = {
  item: PropTypes.object,
  open: PropTypes.bool,
  offsetTop: PropTypes.bool,
  active: PropTypes.bool,
  subItem: PropTypes.bool,
  externalLink: PropTypes.bool,
  color: PropTypes.string,
};
