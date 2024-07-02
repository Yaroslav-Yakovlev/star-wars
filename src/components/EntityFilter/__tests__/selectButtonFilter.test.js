import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import SelectButtonFilter from '../SelectButtonFilter';
import { selectItems } from '../../../store/favoriteEntitySlice';
import { renderWithMockStore } from '../../../test-utils/renderWithMockStore';

const mockStore = configureMockStore();

describe('SelectButtonFilter component', () => {
  let initialState;
  let props;
  let store;

  beforeEach(() => {
    initialState = {
      entities: {
        listOfEntities: ['all', 'people', 'planets', 'starships', 'vehicles'],
      },
    };

    props = {
      getSelectValue: jest.fn(),
    };

    store = mockStore(initialState);

    store.dispatch = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render EntityMenu component', () => {
    renderWithMockStore(<SelectButtonFilter {...props}/>, { store });

    const selectButton = screen.getByTestId('select-button-filter');

    expect(selectButton.tagName).toBe('BUTTON');
    expect(selectButton).toBeInTheDocument();
  });

  it('should open and close entity-menu on button click', () => {

    renderWithMockStore(<SelectButtonFilter {...props}/>, { store });

    const selectButton = screen.getByTestId('select-button-filter');
    fireEvent.click(selectButton);

    const entityMenu = screen.getByRole('menu');
    expect(entityMenu).toBeInTheDocument();

    fireEvent.click(selectButton);
    expect(entityMenu.getAttribute('aria-hidden')).toBeNull();
  });

  it('should call getSelectValue and dispatch selectItems on item click',
    () => {
      renderWithMockStore(<SelectButtonFilter {...props}/>, { store });

      const mockListOfEntities = [
        'all',
        'people',
        'planets',
        'starships',
        'vehicles'];

      mockListOfEntities.forEach(entityItem => {
        const selectButton = screen.getByTestId('select-button-filter');
        fireEvent.click(selectButton);

        const menuItem = screen.getByTestId(entityItem);
        fireEvent.click(menuItem);

        expect(props.getSelectValue).toHaveBeenCalledWith(entityItem);
        expect(store.dispatch).toHaveBeenCalledWith(selectItems(entityItem));
      });
    });
});
