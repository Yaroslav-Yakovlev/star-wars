import React from 'react';
import { Box, CardMedia } from '@mui/material';
import imageLogo from '../../images/star_wars_logo.png'

const Logo = () => {
  return (
    <Box>
      <CardMedia
         component="img"
         image={imageLogo}
         alt={'img.icons'}
         sx={{
           width: '100px',
           height: '100px'
         }}
      />
     </Box>
  );
};

export default Logo;
