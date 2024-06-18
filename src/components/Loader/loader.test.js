import React from 'react';
import { render } from '@testing-library/react';
import Loader from './index';

describe('Loader component', () => {
  it('should render the Loader component', function () {
    const { getByRole } = render(<Loader/>);

    expect(getByRole('loader')).toBeInTheDocument();
  });

  it('should render LinearProgress component',() => {
    const { getByRole } = render(<Loader/>);

    const loader = getByRole('loader');
    expect(loader.querySelector('.MuiLinearProgress-root')).toBeInTheDocument();
  });

  it('should render Loader with variant="indeterminate"', () => {
    const { getByRole } = render(<Loader/>);

    const loader = getByRole('loader')
    expect(loader.querySelector('.MuiLinearProgress-indeterminate')).toBeInTheDocument();
  })
});
