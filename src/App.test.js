import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react CustomLink', () => {
  render(<App />);
  const CustomLinkElement = screen.getByText(/learn react/i);
  expect(CustomLinkElement).toBeInTheDocument();
});
