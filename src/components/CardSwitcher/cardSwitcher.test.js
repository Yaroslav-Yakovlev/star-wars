import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import CardSwitcher from './index';

describe('CardSwitcher component', () => {
  let mockSwitchToNextCharacterById;
  let mockSwitchToPreviousCharacterById;

  beforeEach(() => {
    mockSwitchToNextCharacterById = jest.fn();
    mockSwitchToPreviousCharacterById = jest.fn();
  });

  it('should have next button and previous button', () => {
    render(<CardSwitcher/>);

    const nextButton = screen.getByLabelText('Go to the next item');

    expect(nextButton).toBeInTheDocument();
    expect(nextButton.tagName).toBe('BUTTON');


    const previousButton = screen.getByLabelText('Go to the previous item');

    expect(previousButton).toBeInTheDocument();
    expect(previousButton.tagName).toBe('BUTTON');
  });

  it('should call switchToNextCharacterById function when the next button is clicked', () => {
       render(
        <CardSwitcher
          switchToNextCharacterById={mockSwitchToNextCharacterById}
        />
       );

    const nextButton = screen.getByLabelText('Go to the next item');
    fireEvent.click(nextButton);

    expect(mockSwitchToNextCharacterById).toHaveBeenCalledTimes(1);
    });

  it('should call switchToPreviousCharacterById function when the previous button is clicked', () => {
      render(
        <CardSwitcher
          switchToPreviousCharacterById={mockSwitchToPreviousCharacterById}
        />,
      );
    const previousButton = screen.getByLabelText('Go to the previous item');
    fireEvent.click(previousButton);

    expect(mockSwitchToPreviousCharacterById).toHaveBeenCalledTimes(1);
    });

  it('should call handleKeyPress function when the ArrowLeft  key is pressed', () => {
      render(
        <CardSwitcher
          switchToPreviousCharacterById={mockSwitchToPreviousCharacterById}
          switchToNextCharacterById={mockSwitchToNextCharacterById}
        />,
      );

      fireEvent.keyDown(window, { key: 'ArrowLeft' });

      expect(mockSwitchToPreviousCharacterById).toHaveBeenCalledTimes(1);
      expect(mockSwitchToNextCharacterById).toHaveBeenCalledTimes(0);
    });

  it('should call handleKeyPress function when the ArrowRight  key is pressed',  () => {
    render(
      <CardSwitcher
        switchToPreviousCharacterById={mockSwitchToPreviousCharacterById}
        switchToNextCharacterById={mockSwitchToNextCharacterById}
      />
    );
    fireEvent.keyDown(window, { key: 'ArrowRight' });

    expect(mockSwitchToNextCharacterById).toHaveBeenCalledTimes(1);
    expect(mockSwitchToPreviousCharacterById).toHaveBeenCalledTimes(0);
  });
});
