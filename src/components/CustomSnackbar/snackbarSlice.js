import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  icon: '',
  open: false,
  vertical: 'bottom',
  horizontal: 'right',
};

const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState,
    reducers: {
      openSnackbar: (state, action) => {
        const { open, message, icon } = action.payload;
        state.open = open;
        state.message = message;
        state.icon = icon;
      },
      closeSnackbar: (state) => {
        state.open = false;
      },
    },
  },
);

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
