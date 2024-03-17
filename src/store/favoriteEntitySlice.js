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
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    filterItems: (state, action) => {
      state.items = state.items.filter(item =>
        item.name.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});

export const { addItem, removeItem, filterItems } = favoriteEntitySlice.actions;

export default favoriteEntitySlice.reducer;
