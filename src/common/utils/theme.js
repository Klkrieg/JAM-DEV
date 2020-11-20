import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Colors
const PRIMARY_COLOR = '#f55701';
const SECONDARY_COLOR = '#287c80';

// Fonts
const MAIN_FONT_FAMILY = 'Lato';
const HEADER_FONT_FAMILY = 'Open Sans';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: MAIN_FONT_FAMILY,
    h1: {
      fontFamily: HEADER_FONT_FAMILY,
      fontSize: 48,
      fontWeight: 600,
    },
    h2: {
      fontFamily: HEADER_FONT_FAMILY,
      fontSize: 36,
      fontWeight: 600,
    },
    h3: {
      fontFamily: HEADER_FONT_FAMILY,
      fontSize: 32,
    },
    h4: {
      fontFamily: HEADER_FONT_FAMILY,
      fontSize: 24,
      fontWeight: 600,
    },
    h5: {
      fontFamily: HEADER_FONT_FAMILY,
      fontSize: 18,
      fontWeight: 600,
    },
    body1: {
      fontSize: 16,
    },
    button: {
      textTransform: 'none',
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      outlinedPrimary: {
        border: `2px solid ${PRIMARY_COLOR}`,
        color: 'white',
        '&:hover': {
          border: `2px solid ${PRIMARY_COLOR}`,
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
      outlinedSecondary: {
        border: '2px solid white',
        color: 'white',
        '&:hover': {
          border: '2px solid white',
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
    },
  },
});
