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

const ImageDescription = ({ items, imgUrl, selectEntity }) => {
  const { name, ...otherItems } = items;

  return (
    <Box sx={{ paddingBottom: '100px' }}>
    <Paper
      sx={{ padding: '32px', width: '75%', margin: 'auto'}}
      variant="elevation"
      elevation={5}
      style={{ marginBottom: '20px' }}
    >
      <Stack direction="row" spacing={2}>
        <Card>
          <CardMedia
            sx={{
              width: '100%',
              height: '100%',
            }}
            component="img"
            image={imgUrl}
            alt={selectEntity}
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
    </Box>
  );
};

export default ImageDescription;
