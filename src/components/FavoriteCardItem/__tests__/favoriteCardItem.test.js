import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithMockStore } from '../../../test-utils/renderWithMockStore';
import FavoriteCardItem from '../index';

describe('FavoriteCartItem component', () => {
  const initialState = {};
  const props = {
    item: {
      name: 'Luke Skywalker',
      imageUrl: 'https://example.com/luke.jpg',
    },
    setIsVisibleFavoriteCardItem: jest.fn()
  };

  afterEach(() => {
    jest.clearAllMocks();
  })

  it('should render FavoriteCartItem component with correct data', () => {
    renderWithMockStore(<FavoriteCardItem { ...props }/>, { initialState });

    const cardItem = screen.getByTestId('favorite-cart-item');
    expect(cardItem).toBeInTheDocument();

    const itemName = screen.getByRole('heading', { name: props.item.name })
    expect(itemName).toBeInTheDocument();

    const itemImage = screen.getByAltText(props.item.name);

    expect(itemImage).toBeInTheDocument();
    expect(itemImage).toHaveAttribute('src', props.item.imageUrl);
  });

  it('should display fallback image when image loading fails', () => {
    renderWithMockStore(<FavoriteCardItem {...props}/>, { initialState });

    const itemImage = screen.getByAltText(props.item.name);
    fireEvent.error((itemImage));

    expect(itemImage).toHaveAttribute('src', 'r2d2.png');
  })
});
