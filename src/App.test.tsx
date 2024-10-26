import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn dynamic form', () => {
  render(<App />);
  const linkElement = screen.getByText(/Dynamic Form/i);
  expect(linkElement).toBeInTheDocument();
});
