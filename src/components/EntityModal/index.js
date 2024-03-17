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

const EntityModal = ({ open, onClose }) => {
  const { items } = useSelector(state => state.favorites);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const hasItems = items.length !== 0;

  const handleRemoveItem = (name) => {
    dispatch(removeItem(name));
  };

  const handleFilterItems = (e) => {
    const { value } = e.target;
    setInputValue(value);
    dispatch(filterItems(value));
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle>
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
      {items.map((item) => {
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
        <Button onClick={onClose} color="error">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EntityModal;
