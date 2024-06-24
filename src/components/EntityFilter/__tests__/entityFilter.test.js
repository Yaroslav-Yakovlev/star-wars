import React from 'react';
import { screen } from '@testing-library/react';
import EntityFilter from '../index';
import { renderWithMockStore } from './renderWithMockStore';

describe('EntityFilter', () => {
    const initialState = {
      entities: {
        listOfEntities: ['all', 'people', 'planets', 'starships', 'vehicles'],
      },
      favorites: {
        items: [],
        filteredItems: [],
      },
    }

  it('should render EntityFilter component', () => {
    renderWithMockStore(<EntityFilter/>, { initialState });

    expect(screen.getByRole('entity-filter')).toBeInTheDocument();
  });

  it('should render InputFilter component', () => {
    renderWithMockStore(<EntityFilter/>, { initialState });

    expect(screen.getByRole('input-filter')).toBeInTheDocument();
  });

  it('should render SelectButtonFilter component', () => {
    renderWithMockStore(<EntityFilter/>, { initialState });

    expect(screen.getByRole('select-button-filter')).toBeInTheDocument();
  });
});
