import { Box, Button, styled } from '@mui/material';

export const MuiBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  direction: 'row',
  justifyContent: 'space-around',
  padding: '16px',
}));

export const MuiButton = styled(Button)(({ theme }) => ({
  padding: '16px',
  color: theme.palette.text.light,
  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
  },
}));
