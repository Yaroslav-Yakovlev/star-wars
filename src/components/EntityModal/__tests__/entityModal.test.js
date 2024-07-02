import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { renderWithMockStore } from '../../../test-utils/renderWithMockStore';
import EntityModal from '../index';
import { filterItems } from '../../../store/favoriteEntitySlice';

const mockStore = configureMockStore();

describe('EntityModal component', () => {
  let store;
  let props;

  const initialState = {
    entities: {
      listOfEntities: ['all', 'people', 'planets', 'starships', 'vehicles'],
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

  beforeEach(() => {
    props = {
      isModalOpen: true,
      handleModalClose: jest.fn(),
    };

    store = mockStore(initialState);

    store.dispatch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it(
    'should render EntityModal component with correct title when filteredItems array is empty',
    () => {
      renderWithMockStore(<EntityModal {...props}/>, { store });

      const entityModal = screen.getByTestId('entity-modal');
      expect(entityModal).toBeInTheDocument();

      const entityModalTitle = screen.getByRole('dialog',
        { name: 'Add Your Favorite Entities' });
      expect(entityModalTitle).toHaveTextContent('Add Your Favorite Entities');
    });

  it(
    'should render EntityModal component with correct title when filteredItems array have items',
    () => {
      initialState.favorites.filteredItems = [{ name: 'Luke Skywalker' }];

      renderWithMockStore(<EntityModal {...props}/>, { store });

      const entityModalTitle = screen.getByRole('dialog',
        { name: 'Favorite Entities' });
      expect(entityModalTitle).toHaveTextContent('Favorite Entities');
    });

  it('should render entityFilter component', () => {
    renderWithMockStore(<EntityModal {...props}/>, { store });

    const entityFilter = screen.getByTestId('entity-filter');
    expect(entityFilter).toBeInTheDocument();
  });

  it('should render CloseEntityModalButton component', () => {
    renderWithMockStore(<EntityModal {...props}/>, { store });

    const closeButton = screen.getByRole('button', { name: 'Close' });
    expect(closeButton).toBeInTheDocument();
  });

  it('should render FavoriteCardItem component when favorite list have item',
    () => {
      initialState.favorites.filteredItems = [{ name: 'Luke Skywalker' }];

      renderWithMockStore(<EntityModal {...props}/>, { store });

      const favoriteCardItem = screen.getByTestId('favorite-cart-item');
      expect(favoriteCardItem).toBeInTheDocument();
    });

  it('should clean input value when EntityModal component is closed', () => {
    renderWithMockStore(<EntityModal {...props}/>, { store });

    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);

    expect(store.dispatch).toHaveBeenCalledWith(filterItems(''));
  });
});
