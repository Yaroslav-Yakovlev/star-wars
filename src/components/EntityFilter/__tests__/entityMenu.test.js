import React from 'react';
import { Provider } from 'react-redux';
import { screen, render } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import EntityMenu from '../EntityMenu';
import { capitalize } from '../../../utils/index';

const mockStore = configureMockStore();

const rendersWithMockStore = (store, props) => {
  return render(
    <Provider store={store}>
      <EntityMenu {...props} />
    </Provider>,
  );
};

describe('EntityMenu component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      entities: {
        listOfEntities: ['all', 'people', 'planets', 'starships', 'vehicles'],
      },
    });

  });

  it('should render EntityMenu component', () => {
    const props = {
      handleCloseMenu: jest.fn(),
      anchorEl: document.createElement('div'),
      isOpenMenu: true,
      handleSelectItem: jest.fn(),
    };

    rendersWithMockStore(store, props);

    expect(screen.getByRole('entity-menu')).toBeInTheDocument();
  });

  it('should render EntityMenu with list of entities', () => {
    const props = {
      handleCloseMenu: jest.fn(),
      anchorEl: document.createElement('div'),
      isOpenMenu: true,
      handleSelectItem: jest.fn(),
    };

    rendersWithMockStore(store, props);

    const mockListOfEntities = [
      'all',
      'people',
      'planets',
      'starships',
      'vehicles'];

    mockListOfEntities.map(entity => {
      const menuItem = screen.getByRole(entity);
      const textContent = capitalize(entity);
      expect(menuItem).toHaveTextContent(textContent);
    });
  });
});
