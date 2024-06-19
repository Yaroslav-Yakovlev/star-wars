import React, { useState } from 'react';
import {
  Box,
  Card,
  CardMedia,
  Paper,
  Slide, Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import DeleteButton from './DeleteButton';
import fallBackImage from '../../images/r2d2.png';

const FavoriteCartItem = ({ item }) => {
  const [isVisible, setIsVisible] = useState(true);
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Slide
      direction="right"
      in={isVisible}
      timeout={700}
      unmountOnExit
    >
      <Paper
        variant="elevation"
        elevation={10}
        sx={{
          padding: '0px',
          marginTop: '20px',
          backgroundColor: theme.palette.primary.light,
        }}
      >
        <Stack
          direction={isMobile ? 'row' : 'column'}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Card>
            <CardMedia
              component="img"
              image={item.imageUrl}
              alt={item.name}
              onError={(e) => { e.target.src = fallBackImage;}}
              sx={{ width: '150px', height: '150px' }}
            />
          </Card>
          <Box sx={{ display: 'flex', marginLeft: '20px' }}>
            <Typography variant="h3" color={theme.palette.text.main}>
              {item.name}
            </Typography>
          </Box>
          <DeleteButton
            itemName={item.name}
            setIsVisible={setIsVisible}
          />
        </Stack>
      </Paper>
    </Slide>
  );
};

export default FavoriteCartItem;
