import axios from 'axios';
import React from 'react';

const baseURL = 'https://swapi.dev/api/';

const getPerson = async (id) => {
  const { data } = await axios.get(`${baseURL}people/${id}`);
  return {
    name: data.name,
    gender: data.gender,
    birthYear: data.birth_year,
    eyeColor: data.eye_color,
    mass: data.mass,
    height: data.height,
  };
};

const getPlanets = async (id) => {
  const { data } = await axios.get(`${baseURL}planets/${id}`);
  return {
    name: data.name,
    population: data.population,
    orbitalPeriod: data.orbital_period,
    diameter: data.diameter,
    climate: data.climate,
    terrain: data.terrain,
  };
};

const getStarships = async (id) => {
  const { data } = await axios.get(`${baseURL}starships/${id}`);
  return {
    name: data.name,
    model: data.model,
    passengers: data.passengers,
    cargoCapacity: data.cargo_capacity,
    manufacturer: data.manufacturer,
    costInCredits: data.cost_in_credits,
  };
};

const getVehicles = async (id) => {
  const { data } = await axios.get(`${baseURL}vehicles/${id}`);
  return {
    name: data.name,
    model: data.model,
    passengers: data.passengers,
    cargoCapacity: data.cargo_capacity,
    manufacturer: data.manufacturer,
    costInCredits: data.cost_in_credits,
  }
}

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
