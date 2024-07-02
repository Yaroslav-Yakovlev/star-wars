import React, { useState } from 'react';
import {
  Dialog, Paper, Slide,
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
import FavoriteCartItem from '../FavoriteCardItem';
import CloseEntityModalButton from './CloseEntityModalButton';

const EntityModal = ({ isModalOpen, handleModalClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [isVisibleFavoriteCardItem, setIsVisibleFavoriteCardItem] = useState(
    true);

  const filteredItems = useSelector(selectFilteredItems);
  const dispatch = useDispatch();

  const theme = useTheme();

  const hasFilteredItems = filteredItems.length !== 0;

  const handleCloseFavoritesList = () => {
    handleModalClose();
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
        data-testid='entity-modal'
        open={isModalOpen}
        onClose={handleCloseFavoritesList}
        fullWidth
        maxWidth="md"
      >
        <StyledDialogTitle>
          {hasFilteredItems
            ? 'Favorite Entities'
            : 'Add Your Favorite Entities'
          }
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
            <Slide
              key={item.name}
              direction="right"
              in={isVisibleFavoriteCardItem}
              timeout={700}
              unmountOnExit
            >
              <Paper
                key={item.name}
                variant="elevation"
                elevation={10}
                sx={{
                  padding: '0px',
                  marginTop: '20px',
                  backgroundColor: theme.palette.primary.light,
                }}
              >
                <FavoriteCartItem
                  key={item.name}
                  item={item}
                  setIsVisibleFavoriteCardItem={setIsVisibleFavoriteCardItem}
                />
              </Paper>
            </Slide>
          ))}
        </TransitionGroup>
        <CloseEntityModalButton
          handleCloseFavoritesList={handleCloseFavoritesList}
        />
      </Dialog>
      <CustomSnackbar/>
    </>
  );
};

export default EntityModal;
