import PropTypes from 'prop-types';
// @mui
import Stack from '@mui/material/Stack';
//
import NavList from './nav-list';

// ----------------------------------------------------------------------

export default function NavDesktop({ offsetTop, data, sx, color }) {
  return (
    <Stack component="nav" direction="row" spacing={1} sx={{ mr: 2.5, height: 1, color: '#fff' }}>
      {data.map((link) => (
        <NavList key={link.title} item={link} offsetTop={offsetTop} sx={sx} color={color} />
      ))}
    </Stack>
  );
}

NavDesktop.propTypes = {
  offsetTop: PropTypes.object,
  data: PropTypes.object,
  sx: PropTypes.object,
};
