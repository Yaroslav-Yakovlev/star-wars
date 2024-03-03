import { styled } from '@mui/material';
import { AppBar } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
}));
