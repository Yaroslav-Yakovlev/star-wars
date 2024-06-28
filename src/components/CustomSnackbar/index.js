import React from 'react';
import { Snackbar, SnackbarContent } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import { Slide } from '@mui/material';
import { closeSnackbar } from '../../store/snackbarSlice';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { selectSnackbar } from '../../store/selectors';
import theme from '../styles';

const CustomSnackbar = () => {
  const dispatch = useDispatch();
  const { message, open, vertical, horizontal, icon } = useSelector(selectSnackbar);

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      data-testid='custom-snackbar'
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      autoHideDuration={2000}
      onClose={handleCloseSnackbar}
      key={vertical + horizontal}
      TransitionComponent={Slide}
    >
      <SnackbarContent
        message={message}
        action={
          icon === 'add'
            ? <CheckCircle sx={{color: theme.palette.yellow}}/>
            : <RemoveCircleOutlineIcon sx={{color: theme.palette.yellow}}/>
        }
      />
    </Snackbar>
  );
};

export default CustomSnackbar;
