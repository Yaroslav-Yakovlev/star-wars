import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import { capitalize } from '../../utils';
import { useSelector } from 'react-redux';
import { selectListOfEntities } from '../../store/selectors';
import { useTheme } from '@mui/material/styles';

const EntityMenu = ({ handleCloseMenu, anchorEl, isOpenMenu, handleSelectItem }) => {
  const listOfEntities = useSelector(selectListOfEntities);

  const theme = useTheme();

  return (
    <Menu
      data-testid="entity-menu"
      id="basic-menu"
      anchorEl={anchorEl}
      open={isOpenMenu}
      onClose={handleCloseMenu}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.primary.light,
        },
      }}
    >
      {listOfEntities.map(entity => (
        <MenuItem
          data-testid={entity}
          key={entity}
          value={entity}
          onClick={handleSelectItem}
          sx={{ color: theme.palette.text.main }}
        >
          {capitalize(entity)}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default EntityMenu;
