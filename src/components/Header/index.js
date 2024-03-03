import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Tab, Tabs,
  Toolbar,
} from '@mui/material';
import Logo from '../Logo';
import { useTheme } from '@mui/material/styles';
import { StyledAppBar } from './styledComponents';

const Header = ({ onSelectEntity }) => {
  const [tabValue, setTabValue] = useState(0);

  const theme = useTheme();

  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
    switch (newTabValue) {
      case 0:
        onSelectEntity('people');
        break;
      case 1:
        onSelectEntity('planets');
        break;
      case 2:
        onSelectEntity('starships');
        break;
      case 3:
        onSelectEntity('vehicles');
        break;
      default:
        break;
    }
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton aria-label="logo"><Logo/></IconButton>
        <Box sx={{ width: '100%' }}>
          <Tabs
            onChange={handleTabChange}
            value={tabValue}
            centered
            indicatorColor="primary"
            textColor="inherit"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: theme.palette.text.light,
              },
            }}
          >
            <Tab label="People"/>
            <Tab label="Planets"/>
            <Tab label="Starships"/>
            <Tab label="Vehicles"/>
          </Tabs>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
