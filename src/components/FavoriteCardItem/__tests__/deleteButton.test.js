import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithMockStore } from '../../../test-utils/renderWithMockStore';
import DeleteButton from '../DeleteButton';
import configureMockStore from 'redux-mock-store';
import { removeItem } from '../../../store/favoriteEntitySlice';
import { openSnackbar } from '../../../store/snackbarSlice';

const mockStore = configureMockStore();

describe('DeleteButton component', () => {
  const initialState = {};
  let store;
  let props;

  beforeEach(() => {
    props = {
      itemName: 'Luke Skywalker',
      setIsVisibleFavoriteCardItem: jest.fn(),
    };

    store = mockStore(initialState);

    store.dispatch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should render DeleteButton component', () => {
    renderWithMockStore(<DeleteButton { ...props } />, { store });

    const deleteButton = screen.getByTestId('delete-button');
    expect(deleteButton).toBeInTheDocument();
  });

  it('should have IconButton and delete icon', () => {
    renderWithMockStore(<DeleteButton { ...props } />, { store });

    const iconButton = screen.getByRole('button');
    expect(iconButton).toBeInTheDocument();

    const deleteIcon = screen.getByTestId('DeleteIcon');
    expect(deleteIcon).toBeInTheDocument();
  });

  it('should call setIsVisibleFavoriteCardItem when DeleteButton is clicked', () => {
    renderWithMockStore(<DeleteButton {...props}/>, { store });

    const deleteButton = screen.getByRole('button');
    expect(deleteButton).toBeInTheDocument();

    fireEvent.click(deleteButton);

    expect(props.setIsVisibleFavoriteCardItem).toHaveBeenCalledTimes(1);
  });

  it('should dispatch removeItem and openSnackbar actions when clicked', () => {
    renderWithMockStore(<DeleteButton{ ... props }/>, { store });

    const deleteButton = screen.getByRole('button');

    fireEvent.click(deleteButton);

    expect(store.dispatch).toHaveBeenCalledWith(removeItem(props.itemName));

    expect(store.dispatch).toHaveBeenCalledWith(openSnackbar({
      message: `${props.itemName} removed from favorite list`,
      open: true,
      icon: 'remove',
    }));
  });
})
