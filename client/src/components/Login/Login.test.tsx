import { render } from '@testing-library/react';
import { Login } from './Login';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useDispatch: () => mockedDispatch(),
}));

describe('The Login compoent', () => {
  test('should render the form', () => {
    render(<Login />);
  });
});
