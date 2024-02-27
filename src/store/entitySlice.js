import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://swapi.dev/api/';

export const fetchEntityById = createAsyncThunk(
  'entities/fetchById',
  async ({ entity, id }) => {
    try {
      const { data } = await axios.get(`${baseURL}${entity}/${id}`);
      switch (entity) {
        case 'people':
          return {
            name: data.name,
            'Gender': data.gender,
            'Birth year': data.birth_year,
            'Eye color': data.eye_color,
            'Mass': data.mass,
            'Height': data.height,
          };
        case 'planets':
          return {
            name: data.name,
            'Population': data.population,
            'Orbital period': data.orbital_period,
            'Diameter': data.diameter,
            'Climate': data.climate,
            'Terrain': data.terrain,
          };
        case 'starships':
        case 'vehicles':
          return {
            name: data.name,
            'Model': data.model,
            'Passengers': data.passengers,
            'Cargo capacity': data.cargo_capacity,
            'Manufacturer': data.manufacturer,
            'Cost in credits': data.cost_in_credits,
          };
      }
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
    }
  },
);

const initialState = {
  data: {},
  isLoading: true,
};

const entitySlice = createSlice({
  name: 'entities',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEntityById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEntityById.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchEntityById.rejected, (state) => {
        state.isLoading = false;
        state.data = { name: 'not available' };
      });
  },
});

export default entitySlice.reducer;

