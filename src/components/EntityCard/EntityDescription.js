import React from 'react';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const EntityDescription = ({ entityInfo, name }) => {
  const theme = useTheme();

  return (
    <Box
      data-testid='entity-description'
      sx={{ color: theme.palette.text.light }}
    >
      <Typography marginLeft={1.5} variant="h4">{name}</Typography>
      <Divider/>
      <List>
        {Object.entries(entityInfo).map(([key, value]) => {
          if (key === 'entity') {
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
  );
};

export default EntityDescription;
