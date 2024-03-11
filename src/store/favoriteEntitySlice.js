import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: 0,
};

const favoriteEntitySlice = createSlice({
  name: 'favorite',
  initialState: initialState,
  reducers: {
    addItem: (state) => {
      state.items += 1;
    },
  },
});

export const { addItem } = favoriteEntitySlice.actions;

export default favoriteEntitySlice.reducer;
