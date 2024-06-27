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

    expect(screen.getByRole('entity-card')).toBeInTheDocument();
  });

  it('should render EntityCardImage component', () => {
    renderWithMockStore(<EntityCard/>, { initialState });

    expect(screen.getByRole('entity-card-image')).toBeInTheDocument();
  });

  it('should render EntityDescription component', () => {
    renderWithMockStore(<EntityCard/>, { initialState });

    expect(screen.getByRole('entity-description')).toBeInTheDocument();
  });
});
