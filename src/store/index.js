import { configureStore } from '@reduxjs/toolkit';
import entitySlice from './entitySlice';
import favoriteEntitySlice from './favoriteEntitySlice';

const store = configureStore({
  reducer: {
    entities: entitySlice,
    favorites: favoriteEntitySlice,
  },
});

export default store;
