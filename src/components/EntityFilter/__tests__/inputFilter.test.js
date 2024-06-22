import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import InputFilter from '../InputFilter';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { filterItems } from '../../../store/favoriteEntitySlice';

const rendersWithMockStore = (store) => {
  return render(
    <Provider store={store}>
      <InputFilter/>
    </Provider>,
  );
};

const mockStore = configureMockStore();

describe('InputFilter component', () => {
  let store = mockStore({});
  let setInputValueMock;

  beforeEach(() => {
    store = mockStore({});
    setInputValueMock = jest.fn();
    const originalDispatch = store.dispatch;
    store.dispatch = jest.fn(originalDispatch);
  });

  it('should have correct label text', () => {
    rendersWithMockStore(store);

    const inputFilter = screen.getByLabelText('filter items by name');
    expect(inputFilter).toBeInTheDocument();
  });

  it('should have autoComplete="off" attribute', () => {
    rendersWithMockStore(store);

    const inputFilter = screen.getByTestId('input-filter');

    expect(inputFilter).toHaveAttribute('autoComplete', 'off');
  });

  it('dispatches filterItems action on input change', () => {
    render(
      <Provider store={store}>
        <InputFilter inputValue="" setInputValue={setInputValueMock}/>
      </Provider>,
    );

    const inputFilter = screen.getByTestId('input-filter');
    fireEvent.change(inputFilter, { target: { value: 'test' } });

    expect(setInputValueMock).toHaveBeenCalledWith('test');
    expect(store.dispatch).toHaveBeenCalledWith(filterItems('test'));
  });
});
