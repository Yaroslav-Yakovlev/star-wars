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
import { capitalize } from '../../utils';

const DesktopMenu = ({ onSelectEntity, menuEntityList }) => {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue);
    onSelectEntity(menuEntityList[newTabValue]);
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
          {menuEntityList.map(entity => (
              <Tab
                key={entity}
                label={capitalize(entity)}
                aria-label={`tab for ${entity}`}
              />
          ))}
        </Tabs>
      </Box>
      <ActionsIcons/>
    </Toolbar>
  );
};

export default DesktopMenu;
