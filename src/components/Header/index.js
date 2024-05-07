import React from 'react';
import DesktopMenu from './DesktopMenu';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledAppBar } from './styledComponents';
import MobileMenu from './MobileMenu';
import { useSelector } from 'react-redux';
import { selectListOfEntities } from '../../store/selectors';

const Header = ({ onSelectEntity }) => {
  const listOfEntities = useSelector(selectListOfEntities);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <StyledAppBar position="static">
      {isDesktop
        ? <DesktopMenu
          listOfEntities={listOfEntities}
          onSelectEntity={onSelectEntity}
        />
        : <MobileMenu
          listOfEntities={listOfEntities}
          onSelectEntity={onSelectEntity}
        />
      }
    </StyledAppBar>

  );
};

export default Header;
