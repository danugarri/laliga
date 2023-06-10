import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from './Login';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockedDispatch(),
}));

describe('The Login compoent', () => {
  test('should render the form', () => {
    render(<Login />);
    const formContainer = screen.getByTestId('login-form');
    expect(formContainer).toBeInTheDocument();
  });
  test('should update the from inputs', () => {
    render(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    fireEvent.change(emailInput, { target: { value: 'test' } });
    fireEvent.change(passwordInput, { target: { value: 'test' } });
  });
});
