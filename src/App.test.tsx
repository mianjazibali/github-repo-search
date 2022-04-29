/**
* @jest-environment jsdom
*/

import { render, screen } from '@testing-library/react';
import App from './App';

test('should render app successfully', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText('Find a user');
  expect(linkElement).toBeInTheDocument();
});
