import React from 'react';
import CloseEntityModalButton from '../CloseEntityModalButton';
import { render, screen, fireEvent } from '@testing-library/react';

describe('CloseEntityModalButton', () => {
  const mockHandleCloseFavoritesList = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render component', () => {
    render(<CloseEntityModalButton
      handleCloseFavoritesList={mockHandleCloseFavoritesList}/>
    );

    const closeButton = screen.getByRole('button', { name: 'Close' });
    expect(closeButton).toHaveTextContent('Close');
  });

  it('should close EntityModal component when close button is clicked', () => {
    render(<CloseEntityModalButton
      handleCloseFavoritesList={mockHandleCloseFavoritesList}/>
    );

    const closeButton = screen.getByRole('button', { name: 'Close' });
    fireEvent.click(closeButton);

    expect(mockHandleCloseFavoritesList).toHaveBeenCalledTimes(1);
  });
});
