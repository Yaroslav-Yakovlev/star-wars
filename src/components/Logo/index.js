import React from 'react';
import { Box, CardMedia } from '@mui/material';

const Logo = () => {
  return (
    <Box>
      <CardMedia
         component="img"
         image={"https://img.icons8.com/ios/100/star-wars.png"}
         alt={'img.icons'}
         sx={{ filter: 'invert(0.9)' }}
      />
     </Box>
  );
};

export default Logo;
