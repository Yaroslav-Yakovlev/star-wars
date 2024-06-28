import { Button, Stack, styled } from '@mui/material';
import theme from '../styles';

export const MuiStack = styled(Stack) ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  margin: '0 auto',
  width: '80%'
});

export const StyledSelectButton = styled(Button) ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: theme.palette.main,
  backgroundColor: theme.palette.text.main,
  padding: '2px, 2px',
  marginLeft: '10px',
  '&:hover': {
    backgroundColor: theme.palette.yellow,
  },
});

