import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import EntityCardImage from '../EntityCardImage';
import { renderWithMockStore } from '../../../test-utils/renderWithMockStore';
import configureMockStore from 'redux-mock-store';
import { addItem } from '../../../store/favoriteEntitySlice';
import { openSnackbar } from '../../../store/snackbarSlice';

const mockStore = configureMockStore();

describe('EntityCardImage', () => {
  const initialState = {
    favorites: {
      items: [],
    },
    snackbar: {
      open: 'false',
      message: '',
      icon: '',
    },
  };

  let store;
  let props;

  beforeEach(() => {
    store = mockStore(initialState);

    props = {
      name: 'Luke Skywalker',
      imageUrl: 'https://example.com/luke.jpg',
      entityInfo: {
        'Gender': 'male',
        'Birth year': '19BBY',
      },
    };

    const originalDispatch = store.dispatch;
    store.dispatch = jest.fn(originalDispatch);
  });

  it('should render EntityCardImage component with correct data', () => {
    renderWithMockStore(<EntityCardImage {...props}/>, { store });

    const cardImage = screen.getByAltText(props.name);
    expect(cardImage).toBeInTheDocument();
    expect(cardImage).toHaveAttribute('src', props.imageUrl);
  });

  it('should render fallback image when data is not available', () => {
    const fallbackProps = {
      name: 'not available',
      imageUrl: '',
      entityInfo: {},
    };

    renderWithMockStore(<EntityCardImage {...fallbackProps}/>, { store });

    const fallbackImage = screen.getByAltText('not available');

    expect(fallbackImage).toBeInTheDocument();
    expect(fallbackImage)
      .toHaveAttribute('src', expect.stringContaining('r2d2.png'));
  });

  it('should add item to favorite list when clicking on card', () => {
    renderWithMockStore(<EntityCardImage {...props} />, { store });

    const cardActionArea = screen.getByRole('button',
      { name: 'Add to favorite' });

    fireEvent.click(cardActionArea);

    expect(store.dispatch)
      .toHaveBeenCalledWith(addItem(
        { name: props.name, imageUrl: props.imageUrl, ...props.entityInfo }));
  });

  it('should open snackbar with correct message when adding to favorite list',
    () => {
      renderWithMockStore(<EntityCardImage {...props} />, { store });

      const cardActionArea = screen.getByRole('button', { name: 'Add to favorite' });

      fireEvent.click(cardActionArea);

      expect(store.dispatch).toHaveBeenCalledWith(openSnackbar({
        message: ` ${props.name} added to favorite list`,
        open: true,
        icon: 'add',
      }));
    });

  it(
    'should open snackbar with correct message when entity already exist in favorite list  ',
    () => {
      const initialState = {
        favorites: {
          items: [{ name: 'Luke Skywalker' }],
        },
        snackbar: {
          open: 'false',
          message: '',
          icon: '',
        },
      };

      const store = mockStore(initialState);

      const originalDispatch = store.dispatch;
      store.dispatch = jest.fn(originalDispatch);

      renderWithMockStore(<EntityCardImage {...props} />, { store });

      const cardActionArea = screen.getByRole('button', { name: 'Add to favorite' });
      fireEvent.click(cardActionArea);

      expect(store.dispatch).toHaveBeenCalledWith(openSnackbar({
        message: ` ${props.name} is already in favorite list`,
        open: true,
        icon: 'add',
      }));
    });

  it('should render ImageListItemBar when entity is available', () => {
    renderWithMockStore(<EntityCardImage {...props} />, { store });

    const imageListItemBar = screen.getByTestId('image-list-item-bar');

    expect(imageListItemBar).toBeInTheDocument();
    expect(imageListItemBar).toHaveTextContent(props.name);

    const favoriteIcon = imageListItemBar.querySelector('.MuiSvgIcon-root');

    expect(favoriteIcon).toBeInTheDocument();
  });

  it('should not render ImageListItemBar when entity is not available', () => {
    const fallbackProps = {
      name: 'not available',
      imageUrl: '',
      entityInfo: {},
    };

    renderWithMockStore(<EntityCardImage {...fallbackProps} />, {store});

    const imageListItemBar = screen.queryByTestId('image-list-item-bar');
    expect(imageListItemBar).toBeNull();
  });
});
