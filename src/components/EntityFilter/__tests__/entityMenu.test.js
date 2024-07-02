import React from 'react';
import { screen } from '@testing-library/react';
import EntityMenu from '../EntityMenu';
import { capitalize } from '../../../utils/index';
import { renderWithMockStore } from '../../../test-utils/renderWithMockStore';

describe('EntityMenu component', () => {
  let initialState;
  let props;

  beforeEach(() => {
    initialState = {
      entities: {
        listOfEntities: ['all', 'people', 'planets', 'starships', 'vehicles'],
      },
    };
    props = {
      handleCloseMenu: jest.fn(),
      anchorEl: document.createElement('div'),
      isOpenMenu: true,
      handleSelectItem: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render EntityMenu component', () => {
    renderWithMockStore(<EntityMenu {...props} />, { initialState });

    const entityMenu = screen.getByRole('menu');

    expect(entityMenu).toBeInTheDocument();
  });

  it('should render EntityMenu with list of entities', () => {
    renderWithMockStore(<EntityMenu {...props} />, { initialState });

    const mockListOfEntities = [
      'all',
      'people',
      'planets',
      'starships',
      'vehicles'];

    mockListOfEntities.forEach(entity => {
      const menuItem = screen.getByTestId(entity);
      const textContent = capitalize(entity);
      expect(menuItem).toHaveTextContent(textContent);
    });
  });
});
