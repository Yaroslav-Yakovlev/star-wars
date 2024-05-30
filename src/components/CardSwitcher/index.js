import React, { useEffect, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MuiBox, MuiButton } from './styledComponents';
import { Tooltip } from '@mui/material';

const CardSwitcher = ({ switchToNextCharacterById, switchToPreviousCharacterById }) => {
  const boxRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === 'ArrowLeft') {
      switchToPreviousCharacterById();
    } else if (event.key === 'ArrowRight') {
      switchToNextCharacterById();
    }

    event.stopPropagation();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    boxRef.current.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [switchToNextCharacterById, switchToPreviousCharacterById]);

  return (
    <MuiBox role='card-switcher'>
      <Tooltip title="Previous">
        <MuiButton
          role='next-button'
          aria-label="Go to the previous item"
          onClick={switchToPreviousCharacterById}
        >
          <ArrowBackIosIcon/>
        </MuiButton>
      </Tooltip>
      <Tooltip title="Next">
        <MuiButton
          aria-label="Go to the next item"
          ref={boxRef}
          onClick={switchToNextCharacterById}
          disableFocusRipple
        >
          <ArrowForwardIosIcon/>
        </MuiButton>
      </Tooltip>
    </MuiBox>
  );
};

export default CardSwitcher;
