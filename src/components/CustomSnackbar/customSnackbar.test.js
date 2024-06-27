import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import CustomSnackbar from './index';
import configureMockStore from 'redux-mock-store';
import { closeSnackbar } from '../../store/snackbarSlice';
import { act } from 'react-dom/test-utils';
import { renderWithMockStore } from '../../test-utils/renderWithMockStore';

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

    expect(screen.getByRole('custom-snackbar')).toBeInTheDocument();
    expect(screen.getByText('Item added')).toBeInTheDocument();
    expect(screen.getByTestId('CheckCircleIcon')).toBeInTheDocument();
  });

  it('should renders with remove icon when item is remove', () => {
    initialState.snackbar.message = 'Item removed';
    initialState.snackbar.icon = 'remove';

    renderWithMockStore(<CustomSnackbar/>, { store });

    expect(screen.getByRole('custom-snackbar')).toBeInTheDocument();
    expect(screen.getByText('Item removed')).toBeInTheDocument();
    expect(screen.getByTestId('RemoveCircleOutlineIcon')).toBeInTheDocument();
  });

  it('should closes when clicking away', () => {
    renderWithMockStore(<CustomSnackbar/>, { store });

    expect(screen.getByRole('custom-snackbar')).toBeInTheDocument();
    fireEvent.click(document.body);
    store.dispatch(closeSnackbar());
    expect(store.getActions()).toContainEqual(closeSnackbar());
  });

  it('should auto hides after duration', () => {
    jest.useFakeTimers();

    renderWithMockStore(<CustomSnackbar/>, { store });

    expect(screen.getByRole('custom-snackbar')).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    expect(store.getActions()).toContainEqual(closeSnackbar());
    jest.useRealTimers();
  });
});
