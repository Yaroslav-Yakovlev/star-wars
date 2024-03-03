import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#121418',
      light: '#27292D',
    },
    text: {
      main: '#A3A3A3',
      dark: '#707276',
      light: '#e0e0e0',
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    footer: {
      fontFamily: 'Rajdhani, sans-serif',
    }
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#e0e0e0',
        }
      }
    }
  }
});

export default theme;
