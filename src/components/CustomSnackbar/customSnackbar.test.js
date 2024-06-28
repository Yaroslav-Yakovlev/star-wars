import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import CustomSnackbar from './index';
import configureMockStore from 'redux-mock-store';

import { renderWithMockStore } from '../../test-utils/renderWithMockStore';
import { closeSnackbar } from '../../store/snackbarSlice';
import { act } from 'react-dom/test-utils';

const mockStore = configureMockStore();

describe('CustomSnackbar component', () => {
  let initialState;
  let store;

  beforeEach(() => {
    initialState = {
      snackbar: {
        open: true,
        message: 'Item added',
        icon: 'add',
        vertical: 'bottom',
        horizontal: 'right',
      },
    };

    store = mockStore(initialState);

    const originalDispatch = store.dispatch;
    store.dispatch = jest.fn(originalDispatch);
  });

  it('should renders with message and correct icon when opened', () => {
    renderWithMockStore(<CustomSnackbar/>, { store });

    const customSnackbar = screen.getByRole('presentation');
    const snackbarMessage = screen.getByRole('alert');
    const checkIcon = screen.getByTestId('CheckCircleIcon');

    expect(customSnackbar).toBeInTheDocument();
    expect(snackbarMessage).toHaveTextContent('Item added');
    expect(checkIcon).toBeInTheDocument();
  });

  it('should renders with remove icon when item is remove', () => {
    initialState.snackbar.message = 'Item removed';
    initialState.snackbar.icon = 'remove';

    renderWithMockStore(<CustomSnackbar/>, { store });

    const customSnackbar = screen.getByRole('presentation');
    const snackbarMessage = screen.getByRole('alert');
    const removeIcon = screen.getByTestId('RemoveCircleOutlineIcon');

    expect(customSnackbar).toBeInTheDocument();
    expect(snackbarMessage).toHaveTextContent('Item removed');
    expect(removeIcon).toBeInTheDocument();
  });

  it('should closes when clicking away', () => {
    renderWithMockStore(<CustomSnackbar/>, { store });

    const customSnackbar = screen.getByRole('presentation');

    expect(customSnackbar).toBeInTheDocument();

    fireEvent.click(document.body);

    store.dispatch(closeSnackbar());

    expect(store.getActions()).toContainEqual(closeSnackbar());
  });

  it('should auto hides after duration', () => {
    jest.useFakeTimers();

    renderWithMockStore(<CustomSnackbar/>, { store });

    const customSnackbar = screen.getByRole('presentation');

    expect(customSnackbar).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(store.getActions()).toContainEqual(closeSnackbar());
    jest.useRealTimers();
  });
});
