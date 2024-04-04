import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardMedia,
  DialogActions,
  DialogTitle,
  Divider,
  Paper,
  Stack,
  Dialog,
  Typography,
  IconButton,
  TextField,
  Slide,
  FormControl,
  Select,
  MenuItem,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch, useSelector } from 'react-redux';
import fallBackImage from '../../images/r2d2.png';
import { filterItems, removeItem } from '../../store/favoriteEntitySlice';
import { useTheme } from '@mui/material/styles';
import CustomSnackbar from '../CustomSnackbar';
import { openSnackbar } from '../../store/snackbarSlice';
import { TransitionGroup } from 'react-transition-group';
import {
  selectFavoritesItems,
  selectFilteredItems,
} from '../../store/selectors';

const EntityModal = ({ open, onClose }) => {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const items = useSelector(selectFavoritesItems);
  const filteredItems = useSelector(selectFilteredItems);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const theme = useTheme();

  const hasItems = items.length !== 0;

  const handleRemoveItem = (name) => {
    dispatch(removeItem(name));
    dispatch(openSnackbar({
      message: `${name} removed from favorite list`,
      open: true,
      icon: 'remove',
    }));
  };

  const handleFilterItems = (e) => {
    const { value } = e.target;
    setInputValue(value);
    dispatch(filterItems(value));
  };

  const handleCloseFavoritesList = () => {
    onClose();
    dispatch(filterItems(''));
    setInputValue('');
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleCloseFavoritesList}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle sx={{
          color: theme.palette.text.light,
          textAlign: 'center',
          fontSize: '30px',
        }}>
          {hasItems ? 'Favorite Entities' : 'Add Your Favorite Entities'}
        </DialogTitle>



        {hasItems && <TextField
          id="standard-basic"
          label="filter items"
          variant="standard"
          value={inputValue}
          onChange={handleFilterItems}
          autoComplete="off"

        />
        }

        <FormControl color='warning' variant="standard" >
          <Select
            color='warning'
            id="demo-simple-select-standard"
            value={age}
            onChange={handleChange}
            label="by Entity"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>People</MenuItem>
            <MenuItem value={20}>Planets</MenuItem>
            <MenuItem value={30}>Starships</MenuItem>
            <MenuItem value={30}>Vehicles</MenuItem>
          </Select>
        </FormControl>

        <TransitionGroup>
          {(filteredItems.length === 0 ? items : filteredItems).map((item) => {
            return (
              <Slide
                direction="up"
                in={true}
                timeout={500}
                key={item.name}
                unmountOnExit
              >
                <Paper
                  key={item.name}
                  variant="elevation"
                  elevation={10}
                  sx={{
                    padding: '0px',
                    marginTop: '20px',
                    backgroundColor: theme.palette.primary.light,
                  }}
                >
                  <Stack direction="row"
                         sx={{ display: 'flex', alignItems: 'center' }}>
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
                    <Divider/>
                    <IconButton
                      sx={{ marginLeft: 'auto' }}
                      size="large"
                      onClick={() => handleRemoveItem(item.name)}
                    >
                      <DeleteIcon
                        sx={{
                          fontSize: '36px',
                          color: theme.palette.text.main,
                        }}/>
                    </IconButton>
                  </Stack>
                </Paper>
              </Slide>
            );
          })}
        </TransitionGroup>
        <DialogActions sx={{ justifyContent: 'center' }}>
          <Button
            onClick={handleCloseFavoritesList}
            style={{ color: theme.palette.yellow, padding: '14px' }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <CustomSnackbar/>
    </>
  );
};

export default EntityModal;
