import React from 'react';
import DesktopMenu from './DesktopMenu';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledAppBar } from './styledComponents';
import MobileMenu from './MobileMenu';

const Header = ({ onSelectEntity }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <StyledAppBar position="static">
      { isDesktop ? <DesktopMenu onSelectEntity={onSelectEntity}/> : <MobileMenu/> }
    </StyledAppBar>

  );
};

export default Header;
