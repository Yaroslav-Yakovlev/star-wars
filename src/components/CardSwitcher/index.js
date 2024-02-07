import React, { useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Button, styled } from '@mui/material';

const MuiBox = styled(Box)({
  display: 'flex',
  direction: 'row',
  justifyContent: 'space-around',
  padding: '16px',
});

const MuiButton = styled(Button)(({ theme }) => ({
  padding: '16px',
  color: theme.palette.primary.main,
  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
  },
}));

const CardSwitcher = ({ handleNextId, handlePreviousId }) => {
  const boxRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      handlePreviousId();
    } else if (event.key === 'ArrowRight') {
      handleNextId();
    }

    event.stopPropagation();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    boxRef.current.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleNextId, handlePreviousId]);

  return (
    <MuiBox>
      <MuiButton
        aria-label="Go to the previous item"
        title="Previous"
        onClick={handlePreviousId}
      >
        <ArrowBackIosIcon/>
      </MuiButton>
      <MuiButton
        aria-label="Go to the next item"
        title="Next"
        ref={boxRef}
        onClick={handleNextId}
        disableFocusRipple
      >
        <ArrowForwardIosIcon/>
      </MuiButton>
    </MuiBox>
  );
};

export default CardSwitcher;
