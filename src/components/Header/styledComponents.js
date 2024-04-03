import { Box, Divider, styled } from '@mui/material';
import { AppBar } from '@mui/material';
import theme from '../styles';

export const StyledAppBar = styled(AppBar)({
  backgroundColor: theme.palette.primary.light,
});

export const StyledDivider = styled(Divider)({
  backgroundColor: theme.palette.yellow,
});

export const desktopStyles = {
  flexGrow: 0,
};

export const mobileStyles = {
  display: 'block',
  position: 'fixed',
  background: theme.palette.primary.light,
  bottom: 0,
  left: 0,
  width: '100%',
  zIndex: 99,
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: `1px solid ${theme.palette.yellow}`,
};
