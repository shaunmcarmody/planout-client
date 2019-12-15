import React from 'react';
import { render } from '@testing-library/react';
import LearnReact from './LearnReact';

test('renders learn react link', () => {
  const { getByText } = render(<LearnReact />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
