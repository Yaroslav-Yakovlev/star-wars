import React from 'react';
import { Box, CardMedia } from '@mui/material';

const Logo = () => {
  return (
    <Box sx={{padding: '10px'}} >
      <CardMedia
        component="img"
        image={"https://img.icons8.com/ios-filled/50/baby-yoda.png"}
        alt={'img.icons'}
      />
     </Box>
  );
};

export default Logo;
