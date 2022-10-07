import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import { renderWithRouterAndRedux } from './helpers/renderWith';

describe('testa Login', () => {
  test('se inputs existem', () => {
    renderWithRouterAndRedux(<Login />);

    const inputText = screen.getByRole('textbox');
    const inputPassWord = screen.getByTestId('password-input');

    expect(inputText).toBeInTheDocument();
    expect(inputText.value).toBe('');
    expect(inputPassWord).toBeInTheDocument();
    expect(inputPassWord.value).toBe('');
  });
  test('testa botão', () => {
    renderWithRouterAndRedux(<Login />);

    const button = screen.getByRole('button', {
      name: /entrar/i,
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('disabled');
  });
  test('testa input email', () => {
    renderWithRouterAndRedux(<Login />);

    const inputEmail = screen.getByRole('textbox');

    expect(inputEmail).toHaveAttribute('type', 'email');
  });
  test('Botão', () => {
    renderWithRouterAndRedux(<Login />);

    const button = screen.getByRole('button', {
      name: /entrar/i,
    });

    expect(button).toBeDisabled();
  });
  test('events', () => {
    renderWithRouterAndRedux(<Login />);

    const email = screen.getByRole('textbox');
    const password = screen.getByRole('textbox');

    userEvent.type(email, 'aaaaa@aaa.com');
    userEvent.type(password, 'aaaaaa');

    const button = screen.getByRole('button', {
      name: /entrar/i,
    });
    expect(button).toHaveAttribute('disabled', '');
  });
  test('events false', () => {
    renderWithRouterAndRedux(<Login />);

    const email = screen.getByRole('textbox');
    const password = screen.getByRole('textbox');

    userEvent.type(email, 'aaaaa');
    userEvent.type(password, 'aaa');

    const button = screen.getByRole('button', {
      name: /entrar/i,
    });
    expect(button).toBeDisabled();
  });
});
