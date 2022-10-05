import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import Wallet from '../pages/Wallet';
import { renderWithRedux, renderWithRouterAndRedux } from './helpers/renderWith';

describe('testa wallet', () => {
  test('se valores', () => {
    renderWithRedux(<Wallet />);

    const valor = screen.getByText(/0\.00/i);
    const moeda = screen.getByText(/brl/i);

    expect(valor).toBeInTheDocument();
    expect(moeda).toBeInTheDocument();
  });
  test('se inputs existem', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const loading = screen.getByText(/carregando/i);
    expect(loading).toBeInTheDocument();
    await waitForElementToBeRemoved(loading);
    const inputValue = screen.getByRole('spinbutton', {
      name: /valor:/i,
    });

    expect(inputValue).toBeInTheDocument();
  });
  test('se tem botão', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const loading = screen.getByText(/carregando/i);
    await waitForElementToBeRemoved(loading);
    const button = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });

    expect(button).toBeInTheDocument();
  });
});
