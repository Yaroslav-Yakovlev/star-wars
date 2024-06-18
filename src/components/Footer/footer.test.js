import React from 'react';
import { render } from '@testing-library/react';
import Footer from './index';
import { ThemeProvider } from '@mui/material';
import theme from '../styles';

describe('Footer component', () => {
  it('should render the Footer component', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Footer/>
      </ThemeProvider>,
    );

    expect(getByRole('footer')).toBeInTheDocument();
  });

  it('should have correct font family', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Footer/>
      </ThemeProvider>,
    );
    const footerElement = getByRole('footer');

    expect(footerElement).toHaveStyle('font-family: Rajdhani,sans-serif');
  });

  it('should have correct sections', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Footer/>
      </ThemeProvider>,
    );
    const footerElement = getByRole('footer');

    expect(footerElement).toHaveTextContent('About us');
    expect(footerElement).toHaveTextContent('Contact');
    expect(footerElement).toHaveTextContent('Social Media');
    expect(footerElement).toHaveTextContent('All rights reserved.');
  });

  it('section \'Social Media\' should render correct social media icons ',  () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Footer/>
      </ThemeProvider>,
    );

    expect(getByTestId('instagram-icon')).toBeInTheDocument();
    expect(getByTestId('telegram-icon')).toBeInTheDocument();
    expect(getByTestId('youTube-icon')).toBeInTheDocument();
    expect(getByTestId('facebook-icon')).toBeInTheDocument();
  });
});
