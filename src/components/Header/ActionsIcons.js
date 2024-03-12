import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';
import EntityModal from '../EntityModal';

const ActionsIcons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { items } = useSelector(state => state.favorites);
  const theme = useTheme();

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
    <List sx={{ display: 'flex' }}>
      <ListItem sx={{ margin: '0 20px' }}>
        <Tooltip title="Profile">
          <IconButton
            sx={{ justifyContent: 'center', color: theme.palette.icon }}
            aria-label="Profile">
            <PersonIcon/>
          </IconButton>
        </Tooltip>
      </ListItem>
      <Divider flexItem variant="middle" orientation="vertical"/>
      <ListItem sx={{ margin: '0 20px' }}>
        <Tooltip title="Favorite">
          <IconButton
            onClick={handleModalOpen}
            sx={{ justifyContent: 'center', color: theme.palette.icon }}
            aria-label="Favorite">
            <Badge badgeContent={items.length} max={20}>
              <FavoriteIcon/>
            </Badge>
          </IconButton>
        </Tooltip>
      </ListItem>
    </List>
    <EntityModal open={isModalOpen} onClose={handleModalClose}/>
  </>
  );
};

export default ActionsIcons;
