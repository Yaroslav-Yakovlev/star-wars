import React from 'react';
import {
  Box, Card,
  CardActionArea,
  CardMedia,
  ImageListItemBar,
  Tooltip,
} from '@mui/material';
import fallBackImage from '../../images/r2d2.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addItem } from '../../store/favoriteEntitySlice';
import { openSnackbar } from '../../store/snackbarSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { selectFavoritesItems } from '../../store/selectors';

const EntityCardImage = ({ name, imageUrl, entityInfo }) => {
  const favoriteItems = useSelector(selectFavoritesItems);

  const dispatch = useDispatch();

  const theme = useTheme();

  const isEntityAvailable = name !== 'not available';

  const handleAddToFavorite = () => {
    const isNameInFavoritesList = favoriteItems.some(
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
      <Card>
        <Tooltip placement="top-end" title="Add to favorite">
          <CardActionArea
            onClick={isEntityAvailable ? handleAddToFavorite : null}
          >
            <CardMedia
              sx={{
                maxWidth: '100%',
                height: '50vh',
              }}
              component="img"
              image={isEntityAvailable ? imageUrl : fallBackImage}
              alt={name}
              onError={(e) => { e.target.src = fallBackImage;}}
            />
            {isEntityAvailable && <ImageListItemBar
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
    </>
  );
};

export default EntityCardImage;
