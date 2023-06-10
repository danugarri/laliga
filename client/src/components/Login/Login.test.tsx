import { render, screen } from '@testing-library/react';
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
});
