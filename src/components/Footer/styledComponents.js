import { styled } from '@mui/material';
import { Box } from '@mui/material';

export const StyledFooter = styled(Box)(({theme}) => ({
  fontFamily: theme.typography.footer.fontFamily,
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.text.main,
  padding: '20px',
  textAlign: 'center',
  position: 'relative',
  left: 0,
}));

export const StyledIcons = styled(Box)(({}) => ({
  marginRight: '8px',
  padding: '4px',
  cursor: 'pointer',
}))
