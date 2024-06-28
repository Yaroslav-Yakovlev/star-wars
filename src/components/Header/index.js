import React from 'react';
import DesktopMenu from './DesktopMenu';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MuiAppBar } from './styledComponents';
import MobileMenu from './MobileMenu';
import { useSelector } from 'react-redux';
import { selectListOfEntities } from '../../store/selectors';

const Header = ({ onSelectEntity }) => {
  const listOfEntities = useSelector(selectListOfEntities);

  const menuEntityList = listOfEntities.filter(entity => entity !== 'all');

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <MuiAppBar
      data-testid='header'
      position="static"
    >
      {isDesktop
        ? <DesktopMenu
          menuEntityList={menuEntityList}
          onSelectEntity={onSelectEntity}
        />
        : <MobileMenu
          menuEntityList={menuEntityList}
          onSelectEntity={onSelectEntity}
        />
      }
    </MuiAppBar>
  );
};

export default Header;
