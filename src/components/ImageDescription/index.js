import React from 'react';
import {
  Box, Card, CardMedia,
  Divider, ImageListItemBar,
  List,
  ListItem,
  ListItemText, Paper, Stack,
  Typography, CardActionArea, Tooltip,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import fallBackImage from '../../images/r2d2.png';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { addItem } from '../../store/favoriteEntitySlice';
import CustomSnackbar from '../CustomSnackbar';
import { openSnackbar } from '../../store/snackbarSlice';
import {
  selectEntitiesData,
  selectFavoritesItems,
} from '../../store/selectors';

const ImageDescription = ({ initialEntity }) => {
  const { name, imageUrl, ...entityInfo } = useSelector(selectEntitiesData);

  const favoriteItemsNames = useSelector(selectFavoritesItems);
  const dispatch = useDispatch();

  const theme = useTheme();

  const isNameAvailable = name !== 'not available';

  const handlerAddToFavorite = () => {
    const isNameInFavoritesList = favoriteItemsNames.some(
      item => item.name === name);

    dispatch(addItem({ name, imageUrl, ...entityInfo }));

    dispatch(openSnackbar({
        message: ` ${isNameInFavoritesList
          ? `${name} is already in favorite list`
          : `${name} added to favorite list`
        }`,
        open: true,
        icon: 'add',
      }),
    );
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
              <Tooltip placement="top-end" title="Add to favorite">
                <CardActionArea
                  onClick={isNameAvailable ? handlerAddToFavorite : undefined}
                >
                  <CardMedia
                    sx={{
                      maxWidth: '100%',
                      height: '50vh',
                    }}
                    component="img"
                    image={isNameAvailable ? imageUrl : fallBackImage}
                    alt={initialEntity}
                    onError={(e) => { e.target.src = fallBackImage;}}
                  />
                  {isNameAvailable && <ImageListItemBar
                    sx={{
                      backgroundColor: 'rgba(0, 0, 0, 0.2)',
                      '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.4)' },
                      '& .MuiSvgIcon-root:hover': {
                        color: theme.palette.yellow,
                      },
                    }}
                    title={name}
                    actionIcon={
                      <Box
                        sx={{
                          color: theme.palette.icon,
                          paddingRight: '10px',
                        }}
                      >
                        <FavoriteIcon/>
                      </Box>
                    }
                  />
                  }
                </CardActionArea>
              </Tooltip>
            </Card>

            <Box sx={{ color: theme.palette.text.light }}>
              <Typography marginLeft={1.5} variant="h4">{name}</Typography>
              <Divider/>
              <List>
                {Object.entries(entityInfo).map(([key, value], index) => {
                  if (index === 0) {
                    return null;
                  }
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
      <CustomSnackbar/>
    </>
  );
};

export default ImageDescription;
