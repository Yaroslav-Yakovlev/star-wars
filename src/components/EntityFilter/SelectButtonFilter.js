import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledSelectButton } from './styledComponents';
import { useDispatch } from 'react-redux';
import { selectItems } from '../../store/favoriteEntitySlice';
import EntityMenu from './EntityMenu';

const SelectButtonFilter = ({ getSelectValue }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpenMenu = Boolean(anchorEl);

  const dispatch = useDispatch();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleSelectItem = (event) => {
    const value = event.target.getAttribute('value');
    getSelectValue(value);
    dispatch(selectItems(value));
    handleCloseMenu();
  };

  return (
    <>
    <StyledSelectButton
      role='select-button-filter'
      id="resources-button"
      aria-controls={isOpenMenu ? 'resources-menu' : null}
      aria-haspopup="true"
      aria-expanded={isOpenMenu ? 'true' : null}
      endIcon={<KeyboardArrowDownIcon
        onClick={handleOpenMenu}
        sx={{ marginRight: '4px', marginLeft: '4px' }}/>}
    >
    </StyledSelectButton>
      <EntityMenu
        isOpenMenu={isOpenMenu}
        anchorEl={anchorEl}
        handleCloseMenu={handleCloseMenu}
        handleSelectItem={handleSelectItem}
      />
    </>
  );
};

export default SelectButtonFilter;
