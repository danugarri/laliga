import { UserCredentialsType } from '../components/Login/Login.types';

export const getToken = async (userCredentials: UserCredentialsType) => {
  try {
    const response = await fetch('http://localhost:4000/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userCredentials.email,
        password: userCredentials.password,
      }),
    });
    const data = await response.json();
    localStorage.setItem('token', data.token);
  } catch (error) {
    alert(JSON.stringify(error));
  }
};
