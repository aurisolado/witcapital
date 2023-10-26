import PropTypes from 'prop-types';
import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
// routes
import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 140,
        height: 60,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 310.5 111.75">
        <defs>
          <clipPath id="a">
            <path d="M.098 0h309.804v111.5H.098Zm0 0" />
          </clipPath>
          <clipPath id="b">
            <path d="M.316 58H34v29.496H.316Zm0 0" />
          </clipPath>
          <clipPath id="c">
            <path d="M21 .691h79.594v86.805H21Zm0 0" />
          </clipPath>
        </defs>

        <path
          fill="#9fe870"
          d="M96.592 58.465h7.843l2.016 14.032 3.219-14.032h5.843l3.47 14.032 1.921-14.032h7.531l-5.89 27.547h-6.438l-3.531-15.25-3.422 15.25h-6.594ZM129.418 58.465h7.5v27.5h-7.5ZM143.6 65.778h-5.422v-7.313h18.344v7.313H151.1v20.187h-7.5ZM178.99 86.434c-2.491 0-4.812-.547-6.968-1.64-2.156-1.102-3.887-2.727-5.188-4.875-1.292-2.145-1.937-4.711-1.937-7.704 0-2.976.645-5.539 1.937-7.687 1.301-2.156 3.032-3.781 5.188-4.875 2.156-1.102 4.477-1.656 6.969-1.656 1.05 0 2.129.105 3.234.312 1.113.211 2.094.496 2.938.86v8.812c-.625-.789-1.461-1.43-2.5-1.922-1.032-.5-2.18-.75-3.438-.75-1.387 0-2.59.305-3.61.906a6.004 6.004 0 0 0-2.359 2.485c-.554 1.062-.828 2.234-.828 3.515 0 1.282.274 2.454.828 3.516a6.09 6.09 0 0 0 2.36 2.5c1.02.606 2.222.906 3.61.906 1.257 0 2.405-.25 3.437-.75 1.039-.5 1.875-1.14 2.5-1.922v8.797c-.844.367-1.825.653-2.938.86a17.56 17.56 0 0 1-3.234.312ZM186.218 85.965l5.86-27.5h11.187l5.812 27.5h-7.734l-.781-4.484h-6.125l-.797 4.484Zm13.234-10.875-1.922-11.234-1.968 11.234ZM210.097 58.465h7.578c3.645 0 6.395.793 8.25 2.375 1.864 1.586 2.797 3.922 2.797 7.016 0 1.836-.445 3.438-1.328 4.813-.875 1.375-2.125 2.437-3.75 3.187-1.617.742-3.512 1.11-5.688 1.11h-.359v9h-7.5Zm8.094 12.5c.969 0 1.726-.265 2.281-.796.55-.54.828-1.286.828-2.235 0-.883-.281-1.566-.844-2.047-.562-.488-1.343-.734-2.343-.734h-.516v5.812ZM229.894 58.465h7.5v27.5h-7.5ZM244.076 65.778h-5.422v-7.313h18.343v7.313h-5.421v20.187h-7.5ZM257.862 85.965l5.86-27.5h11.187l5.813 27.5h-7.735l-.781-4.484h-6.125l-.797 4.484Zm13.235-10.875-1.922-11.234-1.969 11.234ZM281.742 58.465h7.5v20.188h7.468v7.312h-14.968Zm0 0"
        />
        <g clipPath="url(#b)">
          <path fill="#9fe870" d="M17.012 58.652 33.687 87.54H.34Zm0 0" />
        </g>
        <path fill="#9fe870" d="m50.48 43.309 13.31 23.054H37.171Zm0 0" />
        <g clipPath="url(#c)">
          <path
            fill="#666"
            d="m28.227 61.043 22.253-38.55 31.254 54.14H37.223l6.297 10.906h57.101L50.481.687 21.93 50.142Zm0 0"
          />
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
