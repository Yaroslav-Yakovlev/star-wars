import React, { useState } from 'react';
import {
  Badge, Box,
  Divider,
  List,
  ListItem, ListItemButton,
  Tooltip,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { desktopStyles, mobileStyles } from './styledComponents'

import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import EntityModal from '../EntityModal';
import { selectFavoritesItems } from '../../store/selectors';

const ActionsIcons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = useSelector(selectFavoritesItems);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  let styleBox = isDesktop ? desktopStyles : mobileStyles;

  return (
    <Box
      role='actions-icons'
      sx={styleBox}
    >
      <List sx={{ display: "flex", justifyContent: 'center' }}>
        <ListItem sx={{ margin: '0 20px' }}>
          <Tooltip title="Profile">
            <ListItemButton
              sx={{ justifyContent: 'center', color: theme.palette.icon }}
              aria-label="profile">
              <PersonIcon/>
            </ListItemButton>
          </Tooltip>
        </ListItem>
        <Divider flexItem variant="middle" orientation="vertical"/>
        <ListItem sx={{ margin: '0 20px' }}>
          <Tooltip title="Favorite">
            <ListItemButton
              role='favorite-button'
              onClick={handleModalOpen}
              sx={{ justifyContent: 'center', color: theme.palette.icon }}
              aria-label="favorite">
              <Badge
                badgeContent={items.length} max={20}
                sx={{ color: theme.palette.yellow }}
              >
                <FavoriteIcon sx={{ color: theme.palette.yellow }}/>
              </Badge>
            </ListItemButton>
          </Tooltip>
        </ListItem>
      </List>
      <EntityModal isModalOpen={isModalOpen} handleModalClose={handleModalClose}/>
    </Box>
  );
};

export default ActionsIcons;
