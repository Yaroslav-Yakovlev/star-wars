import React from 'react';
import { getByRole, render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { fetchEntityById } from './store/entitySlice';
import * as entityActions from './store/entitySlice';

describe('App', () => {
  it('should renders the Header component', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );

    expect(getByRole('header')).toBeInTheDocument();
  });

  it('should renders the CardSwitcher component', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );

    expect(getByRole('card-switcher')).toBeInTheDocument();
  });

  it('should renders the Footer component', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );

    expect(getByRole('footer')).toBeInTheDocument();
  });

  it('should renders the ImageDescription component', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );

    expect(getByRole('image-description')).toBeInTheDocument();
  });

  it('should calls fetchEntityById function when the component mounts', () => {
    const fetchEntityByIdMock = jest.spyOn(entityActions, 'fetchEntityById');

    render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );

    expect(fetchEntityByIdMock).toHaveBeenCalledTimes(1);
    fetchEntityByIdMock.mockRestore();
  });

  it('should call fetchEntityById function with two arguments ', function () {
    const fetchEntityByIdMock = jest.spyOn(entityActions, 'fetchEntityById');

    render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );

    expect(fetchEntityByIdMock).toHaveBeenCalledWith({ entity: 'people', id: 1 });
    fetchEntityByIdMock.mockRestore();
  });

  it('should display the Loader component when isLoading is true ', () => {
    jest.fn().mockImplementation(() => true);
    const { getByRole } = render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );
    expect(getByRole('loader')).toBeInTheDocument();
  });
});
