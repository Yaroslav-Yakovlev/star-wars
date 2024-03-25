import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Box } from '@mui/material';

const Loader = () => {

  return (
    <Box sx={{ width: '100%', margin: 'auto', position: 'fixed' }}>
      <LinearProgress color="primary" variant="indeterminate"/>
    </Box>
  );
};

export default Loader;
