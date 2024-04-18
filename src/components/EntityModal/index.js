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
  MenuItem, Menu,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useDispatch, useSelector } from 'react-redux';
import fallBackImage from '../../images/r2d2.png';
import {
  filterItems,
  removeItem,
  selectItems,
} from '../../store/favoriteEntitySlice';
import { useTheme } from '@mui/material/styles';
import CustomSnackbar from '../CustomSnackbar';
import { openSnackbar } from '../../store/snackbarSlice';
import { TransitionGroup } from 'react-transition-group';
import {
  selectFavoritesItems,
  selectFilteredItems,
} from '../../store/selectors';
import { StyledButton, StyledStack } from './styledComponents';

const EntityModal = ({ isModalOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  const isOpenMenu = Boolean(anchorEl);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const items = useSelector(selectFavoritesItems);
  const filteredItems = useSelector(selectFilteredItems);
  const dispatch = useDispatch();

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

  const handleSelectItem = (event) => {
    const value = event.target.getAttribute('value');
    dispatch(selectItems(value));
    handleCloseMenu();
  };

  return (
    <>
      <Dialog
        open={isModalOpen}
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

        {hasItems && <StyledStack direction="row">
          <TextField
            id="standard-basic"
            label="filter items"
            variant="standard"
            value={inputValue}
            onChange={handleFilterItems}
            autoComplete="off"
          />
          <StyledButton
            id="resources-button"
            aria-controls={isOpenMenu ? 'resources-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isOpenMenu ? 'true' : undefined}
            endIcon={<KeyboardArrowDownIcon
            onClick={handleOpenMenu}
              sx={{ marginRight: '4px', marginLeft: '4px' }}/>}
          >
          </StyledButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={isOpenMenu}
            onClose={handleCloseMenu}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            PaperProps={{
              sx: {
                backgroundColor: theme.palette.primary.light,
              },
            }}
          >
            <MenuItem
              value="all"
              onClick={handleSelectItem}
              sx={{ color: theme.palette.text.main }}
            >
              All
            </MenuItem>
            <MenuItem
              value="people"
              onClick={handleSelectItem}
              sx={{ color: theme.palette.text.main }}
            >
              People
            </MenuItem>
            <MenuItem
              value="planets"
              onClick={handleSelectItem}
              sx={{ color: theme.palette.text.main }}
            >
              Planets
            </MenuItem>
            <MenuItem
              value="starships"
              onClick={handleSelectItem}
              sx={{ color: theme.palette.text.main }}
            >
              Starships
            </MenuItem>
            <MenuItem
              value="vehicles"
              onClick={handleSelectItem}
              sx={{ color: theme.palette.text.main }}
            >
              Vehicles
            </MenuItem>
          </Menu>
        </StyledStack>
        }
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
