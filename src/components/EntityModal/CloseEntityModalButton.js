import React from 'react';
import { Button, DialogActions } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const CloseEntityModalButton = ({ handleCloseFavoritesList }) => {
  const theme = useTheme();

  return (
    <DialogActions sx={{ justifyContent: 'center' }}>
      <Button
        onClick={handleCloseFavoritesList}
        style={{ color: theme.palette.yellow, padding: '14px' }}
      >
        Close
      </Button>
    </DialogActions>
  );
};

export default CloseEntityModalButton;
