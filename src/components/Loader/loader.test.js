import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './index';

describe('Loader component', () => {
  it('should render the Loader component', () => {
    render(<Loader/>);

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();

  });

  it('should render LinearProgress component',() => {
    render(<Loader/>);

    const loader = screen.getByTestId('loader');
    expect(loader.querySelector('.MuiLinearProgress-root')).toBeInTheDocument();
  });

  it('should render Loader with variant="indeterminate"', () => {
    render(<Loader/>);

    const loader = screen.getByTestId('loader')
    expect(loader.querySelector('.MuiLinearProgress-indeterminate')).toBeInTheDocument();
  });
});
