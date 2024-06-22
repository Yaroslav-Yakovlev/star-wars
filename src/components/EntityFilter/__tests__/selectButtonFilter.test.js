import React from 'react';
import { Provider } from 'react-redux';
import { screen, render, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import SelectButtonFilter from '../SelectButtonFilter';
import { selectItems } from '../../../store/favoriteEntitySlice';

const mockStore = configureMockStore();

const rendersWithMockStore = (store, getSelectValue) => {
  return render(
    <Provider store={store}>
      <SelectButtonFilter getSelectValue={getSelectValue}/>
    </Provider>,
  );
};

describe('SelectButtonFilter component', () => {
  let store;
  let getSelectValue;

  beforeEach(() => {
    store = mockStore({
      entities: {
        listOfEntities: ['all', 'people', 'planets', 'starships', 'vehicles'],
      },
    });
    getSelectValue = jest.fn();
    const originalDispatch = store.dispatch;
    store.dispatch = jest.fn(originalDispatch);
  });

  it('should render EntityMenu component', () => {
    rendersWithMockStore(store);

    expect(screen.getByRole('select-button-filter')).toBeInTheDocument();
  });

  it('should open and close entity-menu on button click', () => {

    rendersWithMockStore(store, getSelectValue);

    const button = screen.getByRole('select-button-filter');
    fireEvent.click(button);
    expect(screen.getByRole('entity-menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByTestId('entity-menu').getAttribute('aria-hidden'))
      .toBeNull();
  });

  it('should call getSelectValue and dispatch selectItems on /All/ item click',
    () => {
      rendersWithMockStore(store, getSelectValue);

      const button = screen.getByRole('select-button-filter');
      fireEvent.click(button);

      const menuItem = screen.getByRole('all');
      fireEvent.click(menuItem);

      expect(getSelectValue).toHaveBeenCalledWith('all');
      expect(store.dispatch).toHaveBeenCalledWith(selectItems('all'));
    });

  it(
    'should call getSelectValue and dispatch selectItems on /People/ item click',
    () => {
      rendersWithMockStore(store, getSelectValue);

      const button = screen.getByRole('select-button-filter');
      fireEvent.click(button);

      const menuItem = screen.getByRole('people');
      fireEvent.click(menuItem);

      expect(getSelectValue).toHaveBeenCalledWith('people');
      expect(store.dispatch).toHaveBeenCalledWith(selectItems('people'));
    });

  it(
    'should call getSelectValue and dispatch selectItems on /Planets/ item click',
    () => {
      rendersWithMockStore(store, getSelectValue);

      const button = screen.getByRole('select-button-filter');
      fireEvent.click(button);

      const menuItem = screen.getByRole('planets');
      fireEvent.click(menuItem);

      expect(getSelectValue).toHaveBeenCalledWith('planets');
      expect(store.dispatch).toHaveBeenCalledWith(selectItems('planets'));
    });

  it(
    'should call getSelectValue and dispatch selectItems on /Starships/ item click',
    () => {
      rendersWithMockStore(store, getSelectValue);

      const button = screen.getByRole('select-button-filter');
      fireEvent.click(button);

      const menuItem = screen.getByRole('starships');
      fireEvent.click(menuItem);

      expect(getSelectValue).toHaveBeenCalledWith('starships');
      expect(store.dispatch).toHaveBeenCalledWith(selectItems('starships'));
    });

  it(
    'should call getSelectValue and dispatch selectItems on /Vehicles/ item click',
    () => {
      rendersWithMockStore(store, getSelectValue);

      const button = screen.getByRole('select-button-filter');
      fireEvent.click(button);

      const menuItem = screen.getByRole('vehicles');
      fireEvent.click(menuItem);

      expect(getSelectValue).toHaveBeenCalledWith('vehicles');
      expect(store.dispatch).toHaveBeenCalledWith(selectItems('vehicles'));
    });
});
