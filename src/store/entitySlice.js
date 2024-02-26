import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://swapi.dev/api/';

export const fetchEntityById = createAsyncThunk(
  'entities/fetchById',
  async ({ entity, id }) => {
    const { data } = await axios.get(`${baseURL}${entity}/${id}`);
    if (entity === 'people') {
      return {
        name: data.name,
        'Gender': data.gender,
        'Birth year': data.birth_year,
        'Eye color': data.eye_color,
        'Mass': data.mass,
        'Height': data.height,
      };
    } else if (entity === 'planets') {
      return {
        name: data.name,
        'Population': data.population,
        'Orbital period': data.orbital_period,
        'Diameter': data.diameter,
        'Climate': data.climate,
        'Terrain': data.terrain,
      };
    } else if (entity === 'starships' || entity === 'vehicles') {
      return {
        name: data.name,
        'Model': data.model,
        'Passengers': data.passengers,
        'Cargo capacity': data.cargo_capacity,
        'Manufacturer': data.manufacturer,
        'Cost in credits': data.cost_in_credits,
      };
    } else {
      return { name: 'not available' };
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
