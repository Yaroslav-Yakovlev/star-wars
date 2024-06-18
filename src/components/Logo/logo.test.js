import React from 'react';
import { render } from '@testing-library/react';
import Logo from './index';

describe('Logo component', () => {
  it('should render the CardMedia component with correct attributes', () => {
    const { getByRole } = render(<Logo/>);
    const logoElement = getByRole('logo');

    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src');
    expect(logoElement).toHaveAttribute('alt')
  });

  it('should have correct styles applied', () => {
    const { getByRole } = render(<Logo/>);
    const logoElement = getByRole('logo');

    expect(logoElement).toHaveStyle({
      width: '100px',
      height: '100px',
    });
  });
})
