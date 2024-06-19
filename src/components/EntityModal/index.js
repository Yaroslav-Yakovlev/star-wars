import React, { useState } from 'react';
import {
  Dialog,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { filterItems } from '../../store/favoriteEntitySlice';
import { useTheme } from '@mui/material/styles';
import CustomSnackbar from '../CustomSnackbar';
import { TransitionGroup } from 'react-transition-group';
import { selectFilteredItems } from '../../store/selectors';
import EntityFilter from '../EntityFilter';
import { StyledDialogTitle } from './styledComponents';
import FavoriteCartItem from '../FavoriteCartItem';
import CloseEntityModalButton from './CloseEntityModalButton';

const EntityModal = ({ isModalOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const filteredItems = useSelector(selectFilteredItems);
  const dispatch = useDispatch();

  const theme = useTheme();

  const hasFilteredItems = filteredItems.length !== 0;

  const handleCloseFavoritesList = () => {
    onClose();
    dispatch(filterItems(''));
    setInputValue('');
    setSelectValue('');
  };

  const getSelectValue = (eventSelectValue) => {
    setSelectValue(eventSelectValue);
    setInputValue('');
  };

  return (
    <>
      <Dialog
        open={isModalOpen}
        onClose={handleCloseFavoritesList}
        fullWidth
        maxWidth="md"
      >
        <StyledDialogTitle>
          {hasFilteredItems
            ? 'Favorite Entities'
            : 'Add Your Favorite Entities'}
        </StyledDialogTitle>

        <EntityFilter
          getSelectValue={getSelectValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

        {!hasFilteredItems && (inputValue || selectValue) && (
          <Typography
            variant="h6"
            sx={{
              textAlign: 'center',
              color: theme.palette.text.main,
              marginTop: '20px',
            }}
          >
            Entity &laquo;{inputValue || selectValue}&raquo; not found.
          </Typography>
        )}
        <TransitionGroup>
          {filteredItems.map((item) => (
            <FavoriteCartItem
              key={item.name}
              item={item}
            />
          ))}
        </TransitionGroup>
        <CloseEntityModalButton
          handleCloseFavoritesList={handleCloseFavoritesList}/>
      </Dialog>
      <CustomSnackbar/>
    </>
  );
};

export default EntityModal;
