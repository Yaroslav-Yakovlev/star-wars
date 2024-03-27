import { configureStore } from '@reduxjs/toolkit';
import entitySlice from './entitySlice';
import favoriteEntitySlice from './favoriteEntitySlice';
import snackbarSlice from './snackbarSlice';

const store = configureStore({
  reducer: {
    entities: entitySlice,
    favorites: favoriteEntitySlice,
    snackbar: snackbarSlice,
  },
});

export default store;
