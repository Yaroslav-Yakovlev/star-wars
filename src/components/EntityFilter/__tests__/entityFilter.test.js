import React from 'react';
import { render, screen } from '@testing-library/react';
import EntityFilter from '../index';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

const rendersWithMockStore = (store) => {
  return render(
    <Provider store={store}>
      <EntityFilter/>
    </Provider>,
  );
};

describe('EntityFilter', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      entities: {
        listOfEntities: ['all', 'people', 'planets', 'starships', 'vehicles'],
      },
      favorites: {
        items: [],
        filteredItems: [],
      },
    });
  });

  it('should render EntityFilter component', () => {
    rendersWithMockStore(store);

    expect(screen.getByRole('entity-filter')).toBeInTheDocument();
  });

  it('should render InputFilter component', () => {
    rendersWithMockStore(store);

    expect(screen.getByRole('input-filter')).toBeInTheDocument();
  });

  it('should render SelectButtonFilter component', () => {
    rendersWithMockStore(store);
    expect(screen.getByRole('select-button-filter')).toBeInTheDocument();
  });
});
