import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithMockStore } from '../../../test-utils/renderWithMockStore';
import EntityCard from '../index';

describe('EntityCard component', () => {
  const initialState = {
    entities: {
      data: {},
    },
    favorites: {
      items: [],
      filteredItems: [],
    },
    snackbar: {
      message: '',
      icon: '',
      open: false,
      vertical: 'bottom',
      horizontal: 'right',
    },
  };

  it('should render EntityCard component', () => {
    renderWithMockStore(<EntityCard/>, { initialState });

    const entityCard = screen.getByTestId('entity-card');
    expect(entityCard).toBeInTheDocument();
  });

  it('should render EntityCardImage component', () => {
    renderWithMockStore(<EntityCard/>, { initialState });

    const entityCardImage = screen.getByTestId('entity-card-image');
    expect(entityCardImage).toBeInTheDocument();
  });

  it('should render EntityDescription component', () => {
    renderWithMockStore(<EntityCard/>, { initialState });

    const entityDescription = screen.getByTestId('entity-description');
    expect(entityDescription).toBeInTheDocument();
  });
});
