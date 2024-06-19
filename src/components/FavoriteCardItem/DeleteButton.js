import React from 'react';
import { Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { removeItem } from '../../store/favoriteEntitySlice';
import { openSnackbar } from '../../store/snackbarSlice';

const DeleteButton = ({ itemName, setIsVisibleFavoriteCardItem }) => {
  const theme = useTheme();

  const dispatch = useDispatch();

  const handleRemoveItem = (itemName) => {
    setIsVisibleFavoriteCardItem(false);
    dispatch(removeItem(itemName));
    dispatch(openSnackbar({
      message: `${itemName} removed from favorite list`,
      open: true,
      icon: 'remove',
    }));
  };

  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <IconButton
        sx={{ padding: '36px' }}
        size="large"
        onClick={() => handleRemoveItem(itemName)}
      >
        <DeleteIcon
          sx={{
            fontSize: '36px',
            color: theme.palette.text.main,
          }}/>
      </IconButton>
    </Box>
  );
};

export default DeleteButton;
