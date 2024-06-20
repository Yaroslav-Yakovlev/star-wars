import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CustomSnackbar from './index';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { closeSnackbar } from '../../store/snackbarSlice';
import { act } from 'react-dom/test-utils';

const mockStore = configureMockStore();

const rendersWithMockStore = (store) => {
  return render(
    <Provider store={store}>
      <CustomSnackbar/>
    </Provider>
  )
}

describe('CustomSnackbar component', () => {
  it('should renders with message and correct icon when opened', () => {
    const store = mockStore({
      snackbar: {
        open: true,
        message: 'Item added',
        icon: 'add',
        vertical: 'bottom',
        horizontal: 'right',
      },
    });

    rendersWithMockStore(store)

    expect(screen.getByRole('custom-snackbar')).toBeInTheDocument();
    expect(screen.getByText('Item added')).toBeInTheDocument();
    expect(screen.getByTestId('CheckCircleIcon')).toBeInTheDocument();
  });

  it('should renders with remove icon when item is remove', () => {
    const store = mockStore({
      snackbar: {
        open: true,
        message: 'Item removed',
        icon: 'remove',
        vertical: 'bottom',
        horizontal: 'right',
      },
    });

    rendersWithMockStore(store);

    expect(screen.getByRole('custom-snackbar')).toBeInTheDocument();
    expect(screen.getByText('Item removed')).toBeInTheDocument();
    expect(screen.getByTestId('RemoveCircleOutlineIcon')).toBeInTheDocument();
  });

  it('should closes when clicking away', () => {
    const store = mockStore({
      snackbar: {
        open: true,
        message: 'Item added',
        icon: 'add',
        vertical: 'bottom',
        horizontal: 'right',
      },
    });

    rendersWithMockStore(store);

    expect(screen.getByRole('custom-snackbar')).toBeInTheDocument();
    fireEvent.click(document.body);
    store.dispatch(closeSnackbar());
    expect(store.getActions()).toContainEqual(closeSnackbar());
  });

  it('should auto hides after duration', () => {
    jest.useFakeTimers();
    const store = mockStore({
      snackbar: {
        open: true,
        message: 'Item added',
        icon: 'add',
        vertical: 'bottom',
        horizontal: 'right',
      }
    });

    rendersWithMockStore(store);

    expect(screen.getByRole('custom-snackbar')).toBeInTheDocument();
    act(() => {
      jest.advanceTimersByTime(2000);
    })
    expect(store.getActions()).toContainEqual(closeSnackbar());
    jest.useRealTimers();
  });
});
