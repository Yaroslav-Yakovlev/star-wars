import React, { useState } from 'react';
import { Menu, MenuItem, TextField } from '@mui/material';
import {
  StyledSelectButton,
  StyledStack,
} from '../EntityFilter/styledComponents';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { capitalize } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { selectListOfEntities } from '../../store/selectors';
import { filterItems, selectItems } from '../../store/favoriteEntitySlice';
import { useTheme } from '@mui/material/styles';

const EntityFilter = ({ inputValue, setInputValue, getSelectValue }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const isOpenMenu = Boolean(anchorEl);

  const theme = useTheme();

  const listOfEntities = useSelector(selectListOfEntities);
  const dispatch = useDispatch();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleFilterItems = (event) => {
    let { value } = event.target;
    value = value.trim();
    setInputValue(value);
    dispatch(filterItems(value));
  };

  const handleSelectItem = (event) => {
    const value = event.target.getAttribute('value');
    getSelectValue(value);
    dispatch(selectItems(value));
    handleCloseMenu();
  };

  return (
    <StyledStack direction="row">
      <TextField
        id="standard-basic"
        label="filter items by name"
        variant="standard"
        value={inputValue}
        onChange={handleFilterItems}
        autoComplete="off"
      />
      <StyledSelectButton
        id="resources-button"
        aria-controls={isOpenMenu ? 'resources-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={isOpenMenu ? 'true' : undefined}
        endIcon={<KeyboardArrowDownIcon
          onClick={handleOpenMenu}
          sx={{ marginRight: '4px', marginLeft: '4px' }}/>}
      >
      </StyledSelectButton>

      <Menu
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
            key={entity}
            value={entity}
            onClick={handleSelectItem}
            sx={{ color: theme.palette.text.main }}
          >
            {capitalize(entity)}
          </MenuItem>
        ))}
      </Menu>
    </StyledStack>
  );
};

export default EntityFilter;
