import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  // const theme = useTheme();

  // const PRIMARY_LIGHT = theme.palette.primary.light;

  // const PRIMARY_MAIN = theme.palette.primary.main;

  // const PRIMARY_DARK = theme.palette.primary.dark;

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
        width: 200,
        height: 100,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>

          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>

          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>

        <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            fill="url(#BG1)"
            d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"
          />
          <path
            fill="url(#BG2)"
            d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
          />
          <path
            fill="url(#BG3)"
            d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
          />
        </g>
      </svg> */}

      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        // width="517.000000pt"
        // height="189.000000pt"
        viewBox="0 0 517.000000 189.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,189.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M4276 1750 c-25 -27 -46 -55 -46 -62 1 -7 23 -38 51 -68 l49 -54 55
54 c30 30 55 58 55 63 0 14 -93 117 -106 117 -6 0 -32 -22 -58 -50z"
          />
          <path
            d="M4086 1529 l-39 -51 54 -54 c29 -30 56 -54 60 -54 3 0 25 23 49 51
l43 51 -54 54 c-29 30 -58 54 -64 54 -5 -1 -27 -24 -49 -51z"
          />
          <path
            d="M4470 1534 c-28 -26 -50 -51 -50 -56 0 -12 72 -107 82 -108 3 0 31
23 62 52 56 51 56 52 40 77 -22 35 -66 81 -76 81 -5 0 -31 -21 -58 -46z"
          />
          <path
            d="M536 1493 c-5 -21 -23 -240 -32 -396 l-6 -108 -51 -29 c-70 -40 -120
-54 -194 -55 -55 0 -66 4 -93 30 -35 33 -53 88 -44 133 9 46 90 127 142 143
53 16 61 9 71 -65 8 -58 31 -101 31 -59 0 12 5 25 10 28 6 3 10 18 10 33 0 15
9 47 20 71 28 60 25 78 -12 97 -30 15 -32 15 -45 -2 -7 -10 -13 -21 -13 -26 0
-4 -20 -8 -44 -8 -89 0 -152 -42 -201 -133 -33 -63 -31 -99 8 -172 26 -48 42
-65 81 -87 95 -50 179 -45 261 18 42 32 59 31 52 -2 -5 -28 15 -54 42 -54 16
0 19 11 23 73 7 108 86 283 115 254 7 -8 13 -154 14 -319 0 -100 3 -129 15
-139 26 -21 32 3 23 81 -12 94 -12 95 -7 277 4 120 9 158 22 178 20 31 14 45
-20 45 -18 0 -28 -8 -37 -27 -22 -50 -132 -212 -142 -209 -16 4 -11 47 35 315
11 62 17 117 14 122 -9 16 -42 10 -48 -8z"
          />
          <path
            d="M2725 1498 c-4 -16 -22 -241 -34 -438 -5 -80 -12 -152 -15 -161 -9
-20 20 -51 43 -47 12 2 17 19 22 68 7 77 11 92 55 188 58 126 71 92 73 -186 2
-149 5 -190 16 -202 29 -28 35 1 21 99 -8 54 -11 104 -6 120 4 16 6 84 4 152
-3 109 -1 127 16 157 23 38 19 52 -15 52 -17 0 -29 -9 -41 -32 -35 -68 -129
-207 -139 -204 -15 4 2 158 41 354 8 40 12 77 9 83 -9 13 -45 11 -50 -3z"
          />
          <path
            d="M4286 1338 c-20 -23 -36 -46 -36 -52 0 -6 19 -31 41 -55 l40 -44 45
44 c24 24 44 48 44 54 -1 14 -75 95 -88 95 -6 0 -27 -19 -46 -42z"
          />
          <path
            d="M1200 1362 c-43 -5 -120 -35 -120 -47 0 -32 115 -42 132 -11 12 22
28 20 82 -10 52 -29 82 -25 97 13 15 39 11 42 -30 26 -38 -15 -42 -14 -88 8
-26 13 -59 23 -73 21z"
          />
          <path
            d="M3927 1320 c-15 -21 -27 -44 -26 -52 0 -7 23 -32 51 -56 55 -48 61
-47 100 16 l22 35 -45 39 c-69 61 -71 61 -102 18z"
          />
          <path
            d="M4641 1304 l-51 -46 32 -44 c17 -24 34 -44 37 -44 3 0 31 22 61 49
l55 48 -28 42 c-15 22 -33 41 -41 41 -8 0 -37 -21 -65 -46z"
          />
          <path
            d="M814 1185 c-53 -53 -86 -183 -64 -249 6 -20 23 -45 37 -56 60 -47
138 -9 195 96 29 55 2 184 -38 184 -12 0 -14 -4 -7 -12 13 -16 1 -125 -17
-157 -18 -35 -73 -80 -97 -81 -69 -1 -25 253 45 256 29 2 36 9 29 29 -9 23
-55 18 -83 -10z"
          />
          <path
            d="M1276 1141 c-53 -82 -66 -85 -66 -16 0 51 -2 55 -24 55 -23 0 -24 -1
-31 -141 -6 -120 -5 -144 8 -157 27 -26 42 -7 60 73 16 77 63 168 82 162 6 -2
13 -47 17 -99 9 -114 26 -171 51 -176 17 -3 18 2 12 70 l-6 73 20 -42 c23 -49
61 -78 93 -69 29 7 98 63 98 79 0 9 -2 9 -8 1 -4 -7 -24 -19 -46 -28 -93 -39
-116 -6 -68 97 21 46 40 70 66 86 36 23 76 22 76 -2 0 -7 5 -52 11 -102 18
-147 28 -134 45 62 5 67 5 71 -16 78 -12 4 -24 5 -27 2 -2 -3 -20 1 -38 9 -19
8 -44 14 -56 14 -29 0 -89 -66 -120 -131 l-24 -53 -5 105 -5 104 -30 3 c-27 3
-35 -3 -69 -57z"
          />
          <path
            d="M2494 1184 c-36 -8 -76 -101 -77 -179 -2 -64 -1 -68 31 -95 18 -15
49 -36 68 -46 33 -18 35 -18 67 -1 33 18 63 54 53 64 -3 3 -21 -2 -40 -11 -46
-22 -78 -20 -110 5 -21 17 -26 29 -26 65 0 84 60 170 113 162 17 -2 23 -12 27
-38 4 -27 10 -36 28 -38 20 -3 22 1 22 37 0 31 -5 44 -23 56 -25 16 -98 26
-133 19z"
          />
          <path
            d="M1040 1128 c0 -29 7 -114 16 -188 8 -74 16 -182 16 -240 1 -97 -1
-109 -25 -147 -34 -54 -99 -108 -175 -145 -74 -36 -140 -45 -213 -28 -43 10
-62 23 -106 69 -43 45 -53 52 -53 35 0 -51 119 -124 215 -132 127 -10 300 72
348 164 28 55 37 149 36 379 -1 181 2 229 13 236 21 14 -4 44 -41 47 l-31 3 0
-53z"
          />
          <path
            d="M1868 1163 c-11 -14 -15 -56 -16 -192 -3 -185 5 -233 40 -252 19 -10
20 -9 14 28 -6 40 -9 87 -7 114 1 13 13 16 57 17 63 0 108 15 142 46 l24 21
26 -32 c41 -48 73 -52 122 -13 50 39 52 56 4 29 -20 -11 -48 -19 -63 -17 -21
2 -27 9 -29 35 -6 61 78 183 127 183 30 0 41 -22 41 -85 0 -33 6 -82 13 -110
l13 -50 13 95 c7 52 14 107 16 122 5 29 -15 47 -51 47 -10 0 -39 6 -62 13
l-44 13 -41 -46 c-23 -25 -47 -54 -53 -64 -11 -19 -14 -18 -47 20 -66 77 -202
121 -239 78z m133 -35 c78 -26 117 -75 99 -122 -11 -30 -84 -81 -127 -89 -62
-12 -80 13 -43 60 25 32 25 43 0 43 -40 0 -40 87 0 107 31 16 29 16 71 1z"
          />
          <path
            d="M4123 1138 c-18 -22 -33 -43 -33 -47 0 -4 20 -26 44 -50 l43 -43 38
47 38 46 -43 44 c-25 25 -47 45 -50 44 -3 0 -20 -18 -37 -41z"
          />
          <path
            d="M4460 1141 c-41 -37 -43 -41 -31 -64 7 -13 24 -36 37 -50 l24 -26 45
45 45 46 -20 26 c-35 48 -47 62 -51 62 -2 0 -24 -18 -49 -39z"
          />
          <path
            d="M3001 1132 c-70 -74 -97 -154 -69 -205 31 -59 74 -70 129 -31 22 15
45 37 51 48 10 20 10 20 -8 5 -28 -23 -79 -41 -106 -37 -33 4 -35 45 -3 112
26 55 77 106 107 106 25 0 35 -21 42 -90 4 -36 10 -83 15 -105 l7 -40 11 55
c7 30 14 83 17 117 5 56 3 64 -15 74 -11 6 -23 8 -26 5 -3 -3 -21 1 -40 9 -54
23 -73 18 -112 -23z"
          />
          <path
            d="M3783 1100 c-13 -21 -23 -41 -23 -44 0 -7 102 -86 111 -86 14 0 61
82 52 90 -35 34 -97 80 -106 80 -7 0 -22 -18 -34 -40z"
          />
          <path
            d="M4788 1102 c-26 -20 -47 -43 -48 -50 0 -15 42 -82 52 -82 5 0 32 19
63 42 l54 43 -23 40 c-13 22 -30 41 -38 42 -7 1 -34 -14 -60 -35z"
          />
          <path
            d="M4288 966 l-36 -42 35 -42 c19 -23 39 -42 44 -42 10 0 78 71 79 82 0
10 -70 88 -79 87 -3 0 -23 -20 -43 -43z"
          />
          <path
            d="M3977 941 l-26 -39 45 -42 c25 -23 50 -40 55 -38 6 2 20 20 32 41
l21 37 -39 40 c-22 22 -44 40 -51 40 -6 0 -23 -18 -37 -39z"
          />
          <path
            d="M4601 940 l-44 -40 27 -40 c14 -22 29 -40 33 -40 11 0 93 71 93 81 0
15 -44 79 -55 78 -5 0 -30 -18 -54 -39z"
          />
          <path
            d="M3693 917 c-5 -6 -14 -24 -21 -40 -11 -26 -9 -29 36 -62 26 -19 52
-35 58 -35 14 0 47 71 37 79 -5 3 -30 21 -55 38 -34 24 -48 29 -55 20z"
          />
          <path
            d="M4904 892 l-51 -38 18 -37 c11 -20 21 -37 24 -37 6 0 105 62 105 66
0 12 -33 84 -39 84 -3 -1 -29 -18 -57 -38z"
          />
          <path
            d="M4146 799 c-14 -17 -26 -35 -26 -41 0 -11 70 -88 81 -88 3 0 19 18
34 40 l28 41 -38 39 c-22 22 -42 40 -46 40 -4 0 -19 -14 -33 -31z"
          />
          <path
            d="M4447 792 c-20 -21 -37 -42 -37 -48 0 -5 12 -24 28 -42 l27 -33 44
44 43 45 -27 36 c-15 20 -30 36 -34 36 -4 0 -24 -17 -44 -38z"
          />
          <path
            d="M3867 755 c-9 -20 -17 -37 -17 -39 0 -9 91 -66 99 -62 4 3 14 20 21
37 12 28 12 33 -6 46 -10 7 -29 23 -42 33 -30 27 -36 25 -55 -15z"
          />
          <path
            d="M4728 759 c-21 -17 -38 -36 -38 -43 0 -20 24 -66 35 -66 10 1 15 4
68 47 l27 21 -21 36 c-11 20 -24 36 -27 36 -4 -1 -24 -14 -44 -31z"
          />
          <path
            d="M3606 694 c-11 -29 -6 -55 12 -61 9 -4 33 -17 53 -29 l37 -23 7 36
c3 19 5 36 3 38 -6 5 -99 55 -102 55 -2 0 -7 -7 -10 -16z"
          />
          <path
            d="M4991 680 c-24 -16 -45 -31 -47 -33 -2 -2 1 -18 7 -35 l11 -31 39 24
c21 14 43 25 48 25 17 0 23 19 16 50 -8 37 -18 36 -74 0z"
          />
          <path
            d="M4298 635 c-16 -18 -28 -36 -28 -40 0 -13 53 -75 64 -74 6 0 24 16
39 35 l29 34 -32 40 c-17 22 -35 40 -38 39 -4 0 -19 -15 -34 -34z"
          />
          <path
            d="M4030 626 l-21 -35 43 -40 43 -40 17 22 c30 39 28 53 -17 91 l-44 36
-21 -34z"
          />
          <path
            d="M4566 621 l-38 -39 17 -36 17 -36 27 19 c14 10 35 29 46 40 19 22 19
23 0 57 -10 18 -21 34 -25 34 -3 0 -23 -18 -44 -39z"
          />
          <path
            d="M3786 584 c-13 -33 -4 -50 41 -77 25 -15 47 -26 48 -25 2 2 6 15 10
30 6 23 1 31 -36 57 -48 35 -55 37 -63 15z"
          />
          <path
            d="M4817 569 c-39 -26 -46 -36 -41 -53 11 -37 20 -38 67 -9 48 29 56 47
35 76 -12 15 -17 14 -61 -14z"
          />
          <path
            d="M4186 475 c-9 -13 -16 -28 -16 -32 0 -10 52 -63 62 -63 4 0 15 14 24
31 15 30 15 32 -12 60 -34 35 -37 36 -58 4z"
          />
          <path
            d="M4417 469 c-24 -30 -24 -33 -8 -60 9 -16 19 -29 24 -29 4 0 20 14 36
32 27 30 27 33 12 60 -21 36 -34 35 -64 -3z"
          />
          <path
            d="M3945 463 c-6 -24 -1 -33 37 -65 39 -33 44 -35 56 -21 6 9 12 22 12
29 0 12 -80 84 -92 84 -3 0 -9 -12 -13 -27z"
          />
          <path
            d="M4684 477 c-6 -7 -24 -23 -41 -36 -27 -22 -29 -27 -20 -52 l11 -28
44 32 c54 39 54 40 42 71 -10 28 -19 32 -36 13z"
          />
          <path
            d="M4110 334 c-13 -22 -11 -27 20 -59 40 -41 46 -43 52 -11 3 16 -5 34
-27 59 l-32 36 -13 -25z"
          />
          <path
            d="M4307 329 c-17 -30 -16 -32 4 -61 l22 -30 18 23 c23 30 23 43 3 74
-21 32 -25 31 -47 -6z"
          />
          <path
            d="M4511 325 c-33 -38 -34 -40 -22 -69 6 -17 10 -16 45 16 35 33 36 35
23 61 l-14 28 -32 -36z"
          />
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <div>
      <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
        {logo}
      </Link>
      {/* <span className="">Chojña Pacha</span> */}
    </div>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
