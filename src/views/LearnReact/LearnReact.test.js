import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderWithRedux from '../../utils/renderWithRedux';
import LearnReact from './LearnReact'

test('can render with redux with defaults', () => {
  const { getByText } = renderWithRedux(<LearnReact />)
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
})