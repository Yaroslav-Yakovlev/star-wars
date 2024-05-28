import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filteredItems: [],
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
        state.filteredItems.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
      state.filteredItems = state.items.filter(
        item => item.name !== action.payload);
    },
    filterItems: (state, action) => {
      state.filteredItems = state.items.filter(item =>
        item.name.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
    selectItems: (state, action) => {
      if (action.payload === 'all') {
        state.filteredItems = state.items;
      } else {
        state.filteredItems = state.items.filter(item => item.entity === action.payload);
      }
    },
  },
});

export const { addItem, removeItem, filterItems, selectItems } = favoriteEntitySlice.actions;

export default favoriteEntitySlice.reducer;
