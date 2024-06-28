import React from 'react';
import { MuiStack } from './styledComponents';
import InputFilter from './InputFilter';
import SelectButtonFilter from './SelectButtonFilter';

const EntityFilter = ({ inputValue, setInputValue, getSelectValue }) => {

  return (
    <MuiStack
      data-testid='entity-filter'
      direction="row"
    >
      <InputFilter
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <SelectButtonFilter getSelectValue={getSelectValue}/>
    </MuiStack>
  );
};

export default EntityFilter;
