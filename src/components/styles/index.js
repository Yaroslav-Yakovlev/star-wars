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
    },
    icon: '#e0e0e0',
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    footer: {
      fontFamily: 'Rajdhani, sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontWeight: 700,
      color: '#e0e0e0',
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: '#e0e0e0',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#27292D',
          color: '#e0e0e0',
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: '#e0e0e0',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#27292D',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '80%',
          margin: '0 auto',
          '& .MuiInputLabel-root': {
            color: '#A3A3A3',
          },
          '& input': {
            color: '#e0e0e0',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#707276',
          },
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#e0e0e0',
          },
          '& .MuiInput-underline.Mui-focused:before': {
            borderBottomColor: '#e0e0e0',
          },
        },
      },
    },
  },
});

export default theme;
