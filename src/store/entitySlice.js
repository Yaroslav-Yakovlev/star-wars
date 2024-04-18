import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://swapi.py4e.com/api/';
const imageUrlBase = `https://starwars-visualguide.com//assets/img/`;

export const fetchEntityById = createAsyncThunk(
  'entities/fetchById',
  async ({ entity, id }) => {
    try {
      const { data } = await axios.get(`${baseURL}${entity}/${id}`);

      let imageUrl = `${imageUrlBase}${entity === 'people'
        ? 'characters'
        : entity}/${id}.jpg`;

      switch (entity) {
        case 'people':
          return {
            entity,
            name: data.name,
            'Gender': data.gender,
            'Birth year': data.birth_year,
            'Eye color': data.eye_color,
            'Mass': data.mass,
            'Height': data.height,
            imageUrl,
          };
        case 'planets':
          return {
            entity,
            name: data.name,
            'Population': data.population,
            'Orbital period': data.orbital_period,
            'Diameter': data.diameter,
            'Climate': data.climate,
            'Terrain': data.terrain,
            imageUrl,
          };
        case 'starships':
        case 'vehicles':
          return {
            entity,
            name: data.name,
            'Model': data.model,
            'Passengers': data.passengers,
            'Cargo capacity': data.cargo_capacity,
            'Manufacturer': data.manufacturer,
            'Cost in credits': data.cost_in_credits,
            imageUrl,
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
  entity: ''
};

const entitySlice = createSlice({
  name: 'entities',
  initialState: initialState,
  reducers: {
    addEntity: (state, action) => {
      state.entity = action.payload;
    },
  },
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

export const { addEntity } = entitySlice.actions;

export default entitySlice.reducer;

