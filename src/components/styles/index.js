import { createTheme } from '@mui/material';
import colors from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,
      light: colors.primary.light,
    },
    text: {
      main: colors.text.main,
      dark: colors.text.dark,
      light: colors.text.light,
    },
    icon: colors.icon,
    yellow: colors.yellow,
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    footer: {
      fontFamily: 'Rajdhani, sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontWeight: 700,
      color: colors.text.light,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '&::-webkit-scrollbar': {
            width: '10px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: colors.text.light,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: colors.text.dark,
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.primary.main,
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: colors.text.dark,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: colors.yellow,
            borderRadius: '5px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: colors.text.light,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: colors.text.light,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.primary.light,
          color: colors.text.light,
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: colors.icon,
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          '& .MuiLinearProgress-barColorPrimary': {
            backgroundColor: colors.yellow,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '80%',
          '& .MuiInputLabel-root': {
            color: colors.text.main,
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: colors.yellow,
          },
          '& .MuiInput-root': {
            color: colors.yellow,
            '&:before': {
              borderColor: colors.text.main,
              borderWidth: '2px',
            },
            '&: after': {
              borderColor: colors.yellow,
              borderWidth: '2px',
            },
            ':hover:not(.Mui-focused)': {
              '&:before': {
                borderColor: colors.text.light,
              },
            },
          },
        },
      },
    },
  },
});

export default theme;
