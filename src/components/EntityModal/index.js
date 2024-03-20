import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia, DialogActions, DialogTitle, Divider,
  Paper, Stack, Dialog,
  Typography, IconButton, TextField,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch, useSelector } from 'react-redux';
import fallBackImage from '../../images/r2d2.png';
import { filterItems, removeItem } from '../../store/favoriteEntitySlice';
import { useTheme } from '@mui/material/styles';
import CustomSnackbar from '../CustomSnackbar';
import { openSnackbar } from '../CustomSnackbar/snackbarSlice';

const EntityModal = ({ open, onClose }) => {
  const items = useSelector(state => state.favorites.items);
  const filteredItems = useSelector(state => state.favorites.filteredItems);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const theme = useTheme();

  const hasItems = items.length !== 0;

  const handleRemoveItem = (name) => {
    dispatch(removeItem(name));
    dispatch(openSnackbar({
      message: `${name} removed from favorite list`,
      open: true,
      icon: 'remove',
    }));
  };

  const handleFilterItems = (e) => {
    const { value } = e.target;
    setInputValue(value);
    dispatch(filterItems(value));
  };

  const handleCloseFavoritesList = () => {
    onClose();
    dispatch(filterItems(''));
    setInputValue('');
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseFavoritesList}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle sx={{ color: theme.palette.text.light }}>
          {hasItems ? 'Favorite Entities' : 'Add Your Favorite Entities'}
        </DialogTitle>

        {hasItems && <TextField
          id="standard-basic"
          label="Filter"
          variant="standard"
          value={inputValue}
          onChange={handleFilterItems}
        />
        }
        {(filteredItems.length === 0 ? items : filteredItems).map((item) => {
          return (
            <Paper
              key={item.name}
              variant="elevation"
              elevation={10}
              sx={{ padding: '0px', marginTop: '20px' }}
            >
              <Stack direction="row">
                <Card>
                  <CardMedia
                    component="img"
                    image={item.imageUrl}
                    alt={item.name}
                    onError={(e) => { e.target.src = fallBackImage;}}
                    sx={{ width: '150px', height: '150px', padding: '10px' }}
                  />
                </Card>
                <Typography>{item.name}</Typography>
                <Typography variant="body2" gutterBottom>
                  description
                </Typography>
                <IconButton
                  size="large"
                  onClick={() => handleRemoveItem(item.name)}
                >
                  <DeleteIcon sx={{ fontSize: '36px' }}/>
                </IconButton>
              </Stack>
            </Paper>
          );
        })}
        <DialogActions>
          <Button onClick={handleCloseFavoritesList} color="error">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <CustomSnackbar/>
    </>
  );
};

export default EntityModal;
