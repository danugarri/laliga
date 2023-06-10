import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from './Login';

const mockedUseAppDispatch = jest.fn();
const mockedGetToken = jest.fn();

jest.mock('react-redux', () => ({ ...jest.requireActual('react-redux'), useDispatch: jest.fn() }));
jest.mock('../../store', () => ({
  ...jest.requireActual('../../store'),
  useAppDispatch: () => mockedUseAppDispatch.mockReturnValue(jest.fn(mockedGetToken())),
}));
jest.mock('../../api/api', () => ({
  ...jest.requireActual('../../api/api'),
  getToken: () => mockedGetToken(),
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
  test('should call both mockedDispatch function', () => {
    render(<Login />);
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    fireEvent.change(emailInput, { target: { value: 'test' } });
    fireEvent.change(passwordInput, { target: { value: 'test' } });

    const loginInput = screen.getByTestId('login-input');
    fireEvent.submit(loginInput);

    const expectedParams = {
      payload: { email: 'test', password: 'test' },
      type: 'token/getAsyncToken',
    };

    expect(mockedUseAppDispatch).toHaveBeenCalledWith(expectedParams);
    expect(mockedGetToken).toHaveBeenCalledWith();
  });
});
