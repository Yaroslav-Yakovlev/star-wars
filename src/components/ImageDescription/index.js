import React from 'react';
import {
  Box, Card, CardMedia,
  Divider,
  List,
  ListItem,
  ListItemText, Paper, Stack,
  Typography,
} from '@mui/material';
import fallBackImage from '../../images/r2d2.png';

const ImageDescription = ({ items, imgUrl, entity }) => {
  const { name, ...otherItems } = items;

  return (
    <Paper
      sx={{ padding: '32px', width: '85%', margin: 'auto' }}
      variant="elevation"
      elevation={5}
    >
      <Stack direction="row" spacing={2}>
        <Card>
          <CardMedia
            sx={{ height: '100%' }}
            component="img"
            image={imgUrl}
            alt={entity}
            onError={(e) => { e.target.src = fallBackImage }}
          />
        </Card>
        <Box>
          <Typography marginLeft={1.5} variant="h4">{name}</Typography>
          <Divider/>
          <List>
            {Object.entries(otherItems).map(([key, value]) => {
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
  );
};

export default ImageDescription;
