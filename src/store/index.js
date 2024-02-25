import { configureStore } from '@reduxjs/toolkit';
import entitySlice from './entitySlice';

const store = configureStore({
  reducer: {
    person: entitySlice,
  }
});

export default store;
