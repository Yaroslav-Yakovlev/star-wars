import React, { useState } from 'react';
import {
  Box, Card, CardMedia,
  Divider, ImageListItemBar,
  List,
  ListItem,
  ListItemText, Paper, Stack,
  Typography, CardActionArea, Tooltip, Snackbar, SnackbarContent, Slide,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import fallBackImage from '../../images/r2d2.png';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { addItem } from '../../store/favoriteEntitySlice';
import { CheckCircle } from '@mui/icons-material';

const ImageDescription = ({ selectEntity }) => {
  const [openSnackbar, setOpenSnackbar] = useState({
    open: false,
    vertical: 'bottom',
    horizontal: 'right',
    Transition: Slide,
  });

  const { vertical, horizontal, open, Transition } = openSnackbar;

  const { name, imageUrl, ...otherData } = useSelector(
    state => state.entities.data);

  const theme = useTheme();
  const dispatch = useDispatch();

  const isNameAvailable = name !== 'not available';

  const handlerAddToFavoriteClick = () => {
    dispatch(addItem({ name, imageUrl, ...otherData }));
    setOpenSnackbar({ ...openSnackbar, open: true });
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar({ ...openSnackbar, open: false });
  };

  return (
    <>
      <Box
        sx={{
          paddingBottom: '100px',
          width: '100%',
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Paper
          sx={{
            padding: '32px',
            width: '75%',
            margin: 'auto',
            backgroundColor: theme.palette.primary.light,
          }}
          variant="elevation"
          elevation={5}
          style={{ marginBottom: '20px' }}
        >
          <Stack direction="row" spacing={4}>
            <Card>
              <CardMedia
                sx={{
                  maxWidth: '100%',
                  height: '50vh',
                }}
                component="img"
                image={isNameAvailable ? imageUrl : fallBackImage}
                alt={selectEntity}
                onError={(e) => { e.target.src = fallBackImage;}}
              />
              <CardActionArea>
                {isNameAvailable && <ImageListItemBar
                  sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                  title={name}
                  actionIcon={
                    <Tooltip title="Add to favorite">
                      <Box
                        onClick={handlerAddToFavoriteClick}
                        sx={{ color: theme.palette.icon, paddingRight: '10px' }}
                      >
                        <FavoriteIcon/>
                      </Box>
                    </Tooltip>
                  }
                />
                }
              </CardActionArea>
            </Card>

            <Box sx={{ color: theme.palette.text.light }}>
              <Typography marginLeft={1.5} variant="h4">{name}</Typography>
              <Divider/>
              <List>
                {Object.entries(otherData).map(([key, value]) => {
                  return (
                    <ListItem key={key}>
                      <ListItemText
                        primary={<Typography
                          variant="h6">{key}: {value}</Typography>}
                      >
                      </ListItemText>
                      <Divider/>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Stack>
        </Paper>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message={`${name} added to favorite list`}
        key={vertical + horizontal}
        TransitionComponent={Transition}
      >
        <SnackbarContent
          message={`${name} added to favorite list`}
          action={<CheckCircle/>}
        />
      </Snackbar>
    </>
  );
};

export default ImageDescription;
