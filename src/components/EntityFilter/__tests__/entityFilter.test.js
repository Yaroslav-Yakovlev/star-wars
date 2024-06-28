import React from 'react';
import { screen } from '@testing-library/react';
import EntityFilter from '../index';
import { renderWithMockStore } from '../../../test-utils/renderWithMockStore';

describe('EntityFilter', () => {
    const initialState = {
      entities: {
        listOfEntities: ['all', 'people', 'planets', 'starships', 'vehicles'],
      },
      favorites: {
        items: [],
        filteredItems: [],
      },
    };

  it('should render EntityFilter component', () => {
    renderWithMockStore(<EntityFilter/>, { initialState });

    const entityFilter = screen.getByTestId('entity-filter');

    expect(entityFilter).toBeInTheDocument();
  });

  it('should render InputFilter component', () => {
    renderWithMockStore(<EntityFilter/>, { initialState });

    const inputFilter = screen.getByLabelText('filter items by name');

    expect(inputFilter).toBeInTheDocument();
  });

  it('should render SelectButtonFilter component', () => {
    renderWithMockStore(<EntityFilter/>, { initialState });

    const selectButton = screen.getByRole('textbox', {name: "filter items by name"});

    expect(selectButton).toBeInTheDocument();
  });
});
