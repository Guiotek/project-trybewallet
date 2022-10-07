import { screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  test('testa Table', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const loading = screen.getByText(/carregando/i);
    await waitForElementToBeRemoved(loading);

    const cabeçalho = screen.getByRole('columnheader', {
      name: /descrição/i,
    });

    expect(cabeçalho).toBeInTheDocument();
  });
  test('test event', async () => {
    renderWithRouterAndRedux(<Wallet />);

    const loading = screen.getByText(/carregando/i);
    await waitForElementToBeRemoved(loading);

    const button = screen.getByRole('button', {
      name: /adicionar despesa/i,
    });

    userEvent.click(button);

    const value = screen.getByRole('cell', {
      name: /r\$:0\.00/i,
    });

    expect(value).toBeInTheDocument();
  });
});
