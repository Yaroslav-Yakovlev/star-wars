import React, { useState } from 'react';
import {
  AppBar, Box,
  Button,
  Divider,
  IconButton,
  Stack, Tab, Tabs,
  Toolbar,
} from '@mui/material';
import Logo from '../Logo';

const Header = ({ onSelectEntity }) => {
  const [tabValue, setTabValue] = useState(0);

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
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton aria-label="logo"><Logo/></IconButton>
        <Box sx={{ width: '100%' }}>
          <Tabs
            onChange={handleTabChange}
            value={tabValue}
            centered
            indicatorColor="primary"
            textColor="inherit"
          >
            <Tab label="People"/>
            <Tab label="Planets"/>
            <Tab label="Starships"/>
            <Tab label="Vehicles"/>
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
