import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import Footer from './index';
import { ThemeProvider } from '@mui/material';
import theme from '../styles';

describe('Footer component', () => {
  it('should render the Footer component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer/>
      </ThemeProvider>,
    );

    const footer = screen.getByTestId('footer');

    expect(footer).toBeInTheDocument();
  });

  it('should have correct font family', () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer/>
      </ThemeProvider>,
    );
    const footer = screen.getByTestId('footer');

    expect(footer).toHaveStyle('font-family: Rajdhani,sans-serif');
  });

  it('should have correct sections', () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer/>
      </ThemeProvider>,
    );
    const footer = screen.getByTestId('footer');

    expect(footer).toHaveTextContent('About us');
    expect(footer).toHaveTextContent('Contact');
    expect(footer).toHaveTextContent('Social Media');
    expect(footer).toHaveTextContent('All rights reserved.');
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
