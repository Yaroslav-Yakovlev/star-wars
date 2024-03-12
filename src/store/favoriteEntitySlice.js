import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const favoriteEntitySlice = createSlice({
  name: 'favorite',
  initialState: initialState,
  reducers: {
    addItem: (state, action) => {
      const { name } = action.payload;
      const existingItem = state.items.find(item => item.name === name);

      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
  },
});

export const { addItem } = favoriteEntitySlice.actions;

export default favoriteEntitySlice.reducer;
