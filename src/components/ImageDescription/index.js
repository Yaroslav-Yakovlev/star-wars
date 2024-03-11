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

const ImageDescription = ({ imgUrl, selectEntity }) => {
  const { name, ...otherData } = useSelector(state => state.entities.data);
  const theme = useTheme();
  const dispatch = useDispatch();

  const handlerLikeClick = () => {
    dispatch(addItem());
  };

  return (
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
              image={imgUrl}
              alt={selectEntity}
              onError={(e) => { e.target.src = fallBackImage; }}
            />
            <CardActionArea>
              <ImageListItemBar
                sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                title={name}
                actionIcon={
                  <Tooltip title="Add to favorite">
                    <Box
                      onClick={handlerLikeClick}
                      sx={{ color: theme.palette.icon, paddingRight: '10px' }}
                    >
                      <FavoriteIcon/>
                    </Box>
                  </Tooltip>
                }
              />
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
  );
};

export default ImageDescription;
