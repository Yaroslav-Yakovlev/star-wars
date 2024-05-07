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
import ActionsIcons from './ActionsIcons';

const MobileMenu = ({ onSelectEntity, listOfEntities }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const handleEntityChange = (entity) => {
    onSelectEntity(entity);
    setOpen(false);
  };

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
              {listOfEntities.map(entity => (
                <>
                  <ListItemButton
                    key={entity}
                    onClick={() => {handleEntityChange(entity);}}
                  >
                    <ListItemText>{capitalize(entity)}</ListItemText>
                  </ListItemButton>
                  <StyledDivider variant="middle"/>
                </>
              ))}
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
          <Icon
            component={MenuIcon}
            sx={{ fontSize: '40px', color: theme.palette.yellow }}
          />
        </IconButton>
      </Box>
      <ActionsIcons/>
    </>
  );
};

export default MobileMenu;
