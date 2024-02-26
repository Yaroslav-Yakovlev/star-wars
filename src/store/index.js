import { configureStore } from '@reduxjs/toolkit';
import entitySlice from './entitySlice';

const store = configureStore({
  reducer: {
    entities: entitySlice,
  }
});

export default store;
