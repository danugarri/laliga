import { useState, FormEvent } from 'react';
import { getAsyncToken } from '../../features/auth/auth.Slice';
import { useAppDispatch } from '../../store';

export const Login = () => {
  const dispatch = useAppDispatch();
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    dispatch(getAsyncToken(userCredentials));
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '30px',
        backgroundColor: '#e4e4e4',
      }}
    >
      <div>
        <u>
          <strong>
            <span
              style={{
                fontWeight: 'bolder',
              }}
            >
              LOGIN
            </span>
          </strong>
        </u>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flexDirection: 'column',
          padding: '30px',
          backgroundColor: '#e4e4e4',
          rowGap: '15px',
        }}
      >
        <span>Email</span>
        <input
          type="text"
          name="email"
          onChange={(e) => {
            let _email_input = e.target.value;
            setUserCredentials({ ...userCredentials, email: _email_input });
          }}
        />
        <span>Password</span>
        <input
          type="text"
          name="password"
          onChange={(e) => {
            let _password_input = e.target.value;
            setUserCredentials({
              ...userCredentials,
              password: _password_input,
            });
          }}
        />
        <input
          type="submit"
          style={{
            padding: '5px',
            border: '1px solid black',
            width: '80px',
          }}
        />
      </form>
    </div>
  );
};
