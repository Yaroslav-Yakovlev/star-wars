import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { fetchEntityById } from './store/entitySlice';
import * as entityActions from './store/entitySlice';

describe('App component', () => {
  it('should renders the Header component', () => {
    render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );
    const header = screen.getByTestId('header');

    expect(header).toBeInTheDocument();
  });

  it('should renders the CardSwitcher component', () => {
    render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );
    const cardSwitcher = screen.getByTestId('card-switcher');

    expect(cardSwitcher).toBeInTheDocument();
  });

  it('should renders the EntityCard component', () => {
    render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );
    const entityCard = screen.getByTestId('entity-card');

    expect(entityCard).toBeInTheDocument();
  });

  it('should renders the Footer component', () => {
    render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );
    const footer = screen.getByTestId('footer');

    expect(footer).toBeInTheDocument();
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

  it('should call fetchEntityById function with two arguments ', () => {
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
    render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );

    const loader = screen.getByTestId('loader');

    expect(loader).toBeInTheDocument();
  });
});
