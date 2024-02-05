import axios from 'axios';
import React from 'react';

const baseURL = 'https://swapi.dev/api/';

const getPerson = async (id) => {
  const { data } = await axios.get(`${baseURL}people/${id}`);
  return {
    name: data.name,
    'Gender': data.gender,
    'Birth year': data.birth_year,
    'Eye color': data.eye_color,
    'Mass': data.mass,
    'Height': data.height,
  };
};

const getPlanets = async (id) => {
  const { data } = await axios.get(`${baseURL}planets/${id}`);
  return {
    name: data.name,
    'Population': data.population,
    'Orbital period': data.orbital_period,
    'Diameter': data.diameter,
    'Climate': data.climate,
    'Terrain': data.terrain,
  };
};

const getStarships = async (id) => {
  const { data } = await axios.get(`${baseURL}starships/${id}`);
  return {
    name: data.name,
    'Model': data.model,
    'Passengers': data.passengers,
    'Cargo capacity': data.cargo_capacity,
    'Manufacturer': data.manufacturer,
    'Cost in credits': data.cost_in_credits,
  };
};

const getVehicles = async (id) => {
  const { data } = await axios.get(`${baseURL}vehicles/${id}`);
  return {
    name: data.name,
    'Model': data.model,
    'Passengers': data.passengers,
    'Cargo capacity': data.cargo_capacity,
    'Manufacturer': data.manufacturer,
    'Cost in credits': data.cost_in_credits,
  };
};

const fetchData = async (id, entity) => {
  try {
    switch (entity) {
      case 'people':
        return await getPerson(id);
      case 'planets':
        return await getPlanets(id);
      case 'starships':
        return await getStarships(id);
      case 'vehicles':
        return await getVehicles(id);
      default:
        return { name: 'not available' };
    }
  } catch {
    return { name: 'not available' };
  }
};

export { fetchData };
