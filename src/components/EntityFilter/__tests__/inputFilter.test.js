import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import InputFilter from '../InputFilter';
import { renderWithMockStore } from '../../../test-utils/renderWithMockStore';
import configureMockStore from 'redux-mock-store';
import { filterItems } from '../../../store/favoriteEntitySlice';

const mockStore = configureMockStore();

describe('InputFilter component', () => {
  let initialState;
  let props;
  let store;

  beforeEach(() => {
    initialState = {};

    store = mockStore(initialState);

    props = {
      inputValue: '',
      setInputValue: jest.fn(),
    };

    const originalDispatch = store.dispatch;
    store.dispatch = jest.fn(originalDispatch);
  });

  it('should have correct label text', () => {
    renderWithMockStore(<InputFilter {...props}/>, { store });

    const inputFilter = screen.getByLabelText('filter items by name');
    expect(inputFilter).toBeInTheDocument();
  });

  it('should have autoComplete="off" attribute', () => {
    renderWithMockStore(<InputFilter {...props}/>, { store });

    const inputFilter = screen.getByTestId('input-filter');

    expect(inputFilter).toHaveAttribute('autoComplete', 'off');
  });

  it('dispatches filterItems action on input change', () => {
    renderWithMockStore(<InputFilter {...props} />, { store });

    const inputFilter = screen.getByTestId('input-filter');
    fireEvent.change(inputFilter, { target: { value: 'test' } });

    expect(props.setInputValue).toHaveBeenCalledWith('test');
    expect(store.dispatch).toHaveBeenCalledWith(filterItems('test'));
  });
});
