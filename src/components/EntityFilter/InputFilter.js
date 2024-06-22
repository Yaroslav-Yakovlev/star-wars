import React from 'react';
import { TextField } from '@mui/material';
import { filterItems } from '../../store/favoriteEntitySlice';
import { useDispatch } from 'react-redux';

const InputFilter = ({ inputValue, setInputValue }) => {
  const dispatch = useDispatch();

  const handleFilterItems = (event) => {
    let { value } = event.target;
    value = value.trim();
    setInputValue(value);
    dispatch(filterItems(value));
  };

  return (
    <TextField
      role='input-filter'
      inputProps={{ 'data-testid': 'input-filter' }}
      id="standard-basic"
      label="filter items by name"
      variant="standard"
      value={inputValue}
      onChange={handleFilterItems}
      autoComplete="off"
    />
  );
};

export default InputFilter;
