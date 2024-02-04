import React, { useEffect } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, styled } from '@mui/material';

const MuiBox = styled(Box)({
  display: 'flex',
  direction: 'row',
  justifyContent: 'space-around',
  padding: '20px',
});

const MuiButton = styled(Button)(({theme}) => ({
  padding: '18px',
  color: theme.palette.primary.main,
  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
  },
}))

const CardSwitcher = ({ handleNextId, handlePreviousId }) => {

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      handlePreviousId();
    } else if (event.key === 'ArrowRight') {
      handleNextId();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  }, [handleNextId, handlePreviousId])

  return (
    <MuiBox spacing={2}>
      <MuiButton title='Previous' onClick={handlePreviousId}><ArrowBackIosIcon/></MuiButton>
      <MuiButton title='Next' onClick={handleNextId}><ArrowForwardIosIcon/></MuiButton>
    </MuiBox>
  );
};

export default CardSwitcher;
