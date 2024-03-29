import React, { useState } from 'react';
import {
  Box,
  Drawer, Icon,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../Logo';
import { useTheme } from '@mui/material/styles';
import { StyledDivider } from './styledComponents';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <Box display="flex" justifyContent="space-between" margin="0 35px">
        <IconButton aria-label="logo"><Logo/></IconButton>
        <Drawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
        >
          <Box width="250px" role="presentation" textAlign="center">
            <List>
              <ListItemButton>
                <ListItemText>People</ListItemText>
              </ListItemButton>
              <StyledDivider variant="middle"/>
              <ListItemButton>
                <ListItemText>Planets</ListItemText>
              </ListItemButton>
              <StyledDivider variant="middle"/>
              <ListItemButton>
                <ListItemText>Starships</ListItemText>
              </ListItemButton>
              <StyledDivider variant="middle"/>
              <ListItemButton>
                <ListItemText>Vehicles</ListItemText>
              </ListItemButton>
            </List>
          </Box>
        </Drawer>

        <IconButton
          onClick={() => setOpen(true)}
          size="small"
          edge="start"
          sx={{ color: theme.palette.text.light }}
          aria-label="menu"
        >
          <Icon component={MenuIcon} sx={{ fontSize: '40px' }}/>
        </IconButton>
      </Box>
    </>
  );
};

export default MobileMenu;
