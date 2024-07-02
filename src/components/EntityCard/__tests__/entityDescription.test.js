import React from 'react';
import EntityDescription from '../EntityDescription';
import { screen, render } from '@testing-library/react';

describe('EntityDescription', () => {
  const props = {
    entityInfo: {
      entity: 'people',
      'Gender': 'male',
      'Birth year': '19BBY',
      'Eye color': 'blue',
      'Mass': '77',
      'Height': '172',
    },
    name: 'Luke Skywalker',
  };

  it('should render EntityDescription component', () => {
    render(<EntityDescription { ...props }/>);

    const entityDescription = screen.getByTestId('entity-description');
    expect(entityDescription).toBeInTheDocument();
  });

  it('should render the name', () => {
    render(<EntityDescription { ...props }/>);

    const entityName = screen.getByRole('heading', { name: props.name })
    expect(entityName).toBeInTheDocument();
  });

  it('should render all entity information', () => {
    render(<EntityDescription { ...props }/>);

    Object.entries(props.entityInfo).forEach(([key, value]) => {
      if (key === 'entity') {
        expect(screen.queryByText(`${key}: ${value}`)).toBeNull();
      } else {
        expect(screen.getByRole('heading', { name: `${key}: ${value}`})).toBeInTheDocument();
      }
    });
  });
});
