import React, { useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MuiBox, MuiButton } from './styledComponents';
import { Tooltip } from '@mui/material';

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
      <Tooltip title="Previous">
        <MuiButton
          aria-label="Go to the previous item"
          onClick={handlePreviousId}
        >
          <ArrowBackIosIcon/>
        </MuiButton>
      </Tooltip>
      <Tooltip title="Next">
        <MuiButton
          aria-label="Go to the next item"
          ref={boxRef}
          onClick={handleNextId}
          disableFocusRipple
        >
          <ArrowForwardIosIcon/>
        </MuiButton>
      </Tooltip>
    </MuiBox>
  );
};

export default CardSwitcher;
