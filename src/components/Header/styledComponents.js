import { Divider, styled } from '@mui/material';
import { AppBar } from '@mui/material';
import theme from '../styles';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}));

export const StyledDivider = styled(Divider)({
  backgroundColor: theme.palette.yellow,
});

