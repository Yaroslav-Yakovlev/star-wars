import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://swapi.dev/api/';

export const fetchPersonById = createAsyncThunk(
  'people/fetchById',
  async (id) => {
    const { data } = await axios.get(`${baseURL}people/${id}`);
    return {
      name: data.name,
      'Gender': data.gender,
      'Birth year': data.birth_year,
      'Eye color': data.eye_color,
      'Mass': data.mass,
      'Height': data.height,
    };
  }
)

const initialState = {
  entity: [],
  isLoading: true,
  id: 1,
};

const entitySlice = createSlice({
  name: 'person',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPersonById.fulfilled, (state, action) => {
        console.log(action)
        state.entity = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPersonById.rejected, (state) => {
        state.isLoading = false;
        state.entity = { name: 'not available' }
      })
  },
});

export default entitySlice.reducer;
