import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Tab, Tabs,
  Toolbar,
} from '@mui/material';
import Logo from '../Logo';
import { useTheme } from '@mui/material/styles';
import ActionsIcons from './ActionsIcons';

const DesktopMenu = ({ onSelectEntity, listOfEntities }) => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
    onSelectEntity(listOfEntities[newTabValue]);
  };

  return (
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
              backgroundColor: theme.palette.yellow,
            },
          }}
        >
          {listOfEntities.map(entity => (
            <Tab key={entity} label={entity}/>
          ))}
        </Tabs>
      </Box>
      <ActionsIcons/>
    </Toolbar>
  );
};

export default DesktopMenu;
