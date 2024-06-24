import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

export const renderWithMockStore = (
  ui, { initialState, store = mockStore(initialState) } = {}) => {
  return render(
    <Provider store={store}>
      {ui}
    </Provider>,
  );
};
