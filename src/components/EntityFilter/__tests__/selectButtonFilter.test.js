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

    const originalDispatch = store.dispatch;
    store.dispatch = jest.fn(originalDispatch);
  });

  it('should render EntityMenu component', () => {
    renderWithMockStore(<SelectButtonFilter {...props}/>, { store });

    expect(screen.getByRole('select-button-filter')).toBeInTheDocument();
  });

  it('should open and close entity-menu on button click', () => {

    renderWithMockStore(<SelectButtonFilter {...props}/>, { store });

    const button = screen.getByRole('select-button-filter');
    fireEvent.click(button);
    expect(screen.getByRole('entity-menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByTestId('entity-menu').getAttribute('aria-hidden'))
      .toBeNull();
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
        const button = screen.getByRole('select-button-filter');
        fireEvent.click(button);

        const menuItem = screen.getByRole(entityItem);
        fireEvent.click(menuItem);

        expect(props.getSelectValue).toHaveBeenCalledWith(entityItem);
        expect(store.dispatch).toHaveBeenCalledWith(selectItems(entityItem));
      });
    });
});
