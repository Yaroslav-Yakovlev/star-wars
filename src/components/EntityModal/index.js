import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  DialogActions,
  DialogTitle,
  Paper,
  Stack,
  Dialog,
  Typography,
  IconButton,
  Slide,
  useMediaQuery,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import fallBackImage from '../../images/r2d2.png';
import {
  filterItems,
  removeItem,
} from '../../store/favoriteEntitySlice';
import { useTheme } from '@mui/material/styles';
import CustomSnackbar from '../CustomSnackbar';
import { openSnackbar } from '../../store/snackbarSlice';
import { TransitionGroup } from 'react-transition-group';
import { selectFilteredItems} from '../../store/selectors';
import EntityFilter from '../EntityFilter';

const EntityModal = ({ isModalOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('');

  const filteredItems = useSelector(selectFilteredItems);
  const dispatch = useDispatch();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  const hasFilteredItems = filteredItems.length !== 0;

  const handleRemoveItem = (name) => {
    dispatch(removeItem(name));
    dispatch(openSnackbar({
      message: `${name} removed from favorite list`,
      open: true,
      icon: 'remove',
    }));
  };

  const handleCloseFavoritesList = () => {
    onClose();
    dispatch(filterItems(''));
    setInputValue('');
    setSelectValue('');
  };

  const getSelectValue = (eventSelectValue) => {
    setSelectValue(eventSelectValue);
    setInputValue('');
  }

  return (
    <>
      <Dialog
        open={isModalOpen}
        onClose={handleCloseFavoritesList}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle sx={{
          color: theme.palette.text.light,
          textAlign: 'center',
          fontSize: '30px',
          marginTop: '20px',
        }}>
          {hasFilteredItems ? 'Favorite Entities' : 'Add Your Favorite Entities'}
        </DialogTitle>

        <EntityFilter
          getSelectValue={getSelectValue}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

        {!hasFilteredItems && (inputValue || selectValue) && (
          <Typography
            variant="h6"
            sx={{ textAlign: 'center', color: theme.palette.text.main, marginTop: '20px' }}
          >
            Entity &laquo;{inputValue || selectValue}&raquo; not found.
          </Typography>
        )}

        <TransitionGroup>
          {filteredItems.map((item) => (
            <Slide
              direction="right"
              in={true}
              timeout={700}
              key={item.name}
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
                <Stack key={item.name}
                       direction={isMobile ? 'row' : 'column'}
                       sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Card>
                    <CardMedia
                      component="img"
                      image={item.imageUrl}
                      alt={item.name}
                      onError={(e) => { e.target.src = fallBackImage;}}
                      sx={{ width: '150px', height: '150px' }}
                    />
                  </Card>
                  <Box sx={{ display: 'flex', marginLeft: '20px' }}>
                    <Typography variant="h3" color={theme.palette.text.main}>
                      {item.name}
                    </Typography>
                  </Box>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                      sx={{ padding: '36px' }}
                      size="large"
                      onClick={() => handleRemoveItem(item.name)}
                    >
                      <DeleteIcon
                        sx={{
                          fontSize: '36px',
                          color: theme.palette.text.main,
                        }}/>
                    </IconButton>
                  </Box>
                </Stack>
              </Paper>
            </Slide>
          ))
          }
        </TransitionGroup>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button
            onClick={handleCloseFavoritesList}
            style={{ color: theme.palette.yellow, padding: '14px' }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <CustomSnackbar/>
    </>
  );
};

export default EntityModal;
