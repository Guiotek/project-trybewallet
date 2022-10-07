import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('testa App', () => {
  test('App', () => {
    renderWithRouterAndRedux(<App />);

    const input = screen.getByRole('textbox');

    expect(input).toBeInTheDocument();
  });
});
