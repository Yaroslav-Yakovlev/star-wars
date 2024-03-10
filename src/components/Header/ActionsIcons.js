import React from 'react';
import {
  Badge,
  Divider, IconButton,
  List,
  ListItem,
  Tooltip,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useTheme } from '@mui/material/styles';

const ActionsIcons = () => {
  const theme = useTheme();

  return (
    <List sx={{ display: 'flex' }} >
      <ListItem sx={{ margin: '0 20px' }}>
        <Tooltip title="Profile">
          <IconButton sx={{ justifyContent: 'center', color: theme.palette.icon}} aria-label='Profile'>
            <PersonIcon />
          </IconButton>
        </Tooltip>
      </ListItem>
      <Divider flexItem variant='middle' orientation='vertical' />
      <ListItem sx={{ margin: '0 20px' }}>
        <Tooltip title="Favorite">
          <IconButton sx={{ justifyContent: 'center', color: theme.palette.icon }} aria-label='Favorite'>
            <Badge badgeContent={9} max={20}>
            <FavoriteIcon/>
            </Badge>
          </IconButton>
        </Tooltip>
      </ListItem>
    </List>
  );
};

export default ActionsIcons;
