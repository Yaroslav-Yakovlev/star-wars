import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { fetchEntityById } from './store/entitySlice';

describe('App', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should renders the Header component', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );
    const header = getByRole('header');
    expect(header).toBeInTheDocument();
  });

  it('should renders the CardSwitcher component',  () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );
    const cardSwitcher = getByRole('card-switcher');
    expect(cardSwitcher).toBeInTheDocument();
  });

  it('should renders the Footer component',  () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );
    const footer = getByRole('footer');
    expect(footer).toBeInTheDocument();
  });

  it('should renders the ImageDescription component', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );
    const imageDescription = getByRole('image-description');
    expect(imageDescription).toBeInTheDocument();
  });

  it('should calls fetchEntityById function when the component mounts', () => {
    const fetchEntityByIdMock = jest.spyOn(require('./store/entitySlice'), 'fetchEntityById');
    render(
      <Provider store={store}>
        <App/>
      </Provider>,
    );
    expect(fetchEntityByIdMock).toHaveBeenCalledTimes(1);
    fetchEntityByIdMock.mockRestore();
  });
});
