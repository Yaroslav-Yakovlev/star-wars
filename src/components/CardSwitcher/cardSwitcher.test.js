import { fireEvent, getByRole, render } from '@testing-library/react';
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
    const { getByRole } = render(<CardSwitcher/>);

    const nextButton = getByRole('next-button');
    const previousButton = getByRole('previous-button');

    expect(nextButton).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
  });

  it(
    'should call switchToNextCharacterById function when the next button is clicked',
    () => {
      const { getByRole } = render(
        <CardSwitcher
          switchToNextCharacterById={mockSwitchToNextCharacterById}
        />,
      );
      const nextButton = getByRole('next-button');
      fireEvent.click(nextButton);

      expect(mockSwitchToNextCharacterById).toHaveBeenCalledTimes(1);
    });

  it(
    'should call switchToPreviousCharacterById function when the previous button is clicked',
    () => {
      const { getByRole } = render(
        <CardSwitcher
          switchToPreviousCharacterById={mockSwitchToPreviousCharacterById}
        />,
      );
      const previousButton = getByRole('previous-button');
      fireEvent.click(previousButton);

      expect(mockSwitchToPreviousCharacterById).toHaveBeenCalledTimes(1);
    });

  it('should call handleKeyPress function when the ArrowLeft  key is pressed',
    () => {
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
