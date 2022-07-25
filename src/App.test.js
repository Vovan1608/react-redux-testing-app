import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const div = document.getElementsByTagName('div')[0];

  expect(div.innerHTML).toContain('Helo');
});
