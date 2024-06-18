import React from 'react';
import { StyledStack } from './styledComponents';
import InputFilter from './InputFilter';
import SelectButtonFilter from './SelectButtonFilter';

const EntityFilter = ({ inputValue, setInputValue, getSelectValue }) => {

  return (
    <StyledStack direction="row">
      <InputFilter
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <SelectButtonFilter getSelectValue={getSelectValue}/>
    </StyledStack>
  );
};

export default EntityFilter;
