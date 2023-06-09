import { ClubsResponse } from '../components/Clubs/clubs.types';
import { LoginResponseData, UserCredentialsType } from '../components/Login/Login.types';

export const getToken = async (userCredentials: UserCredentialsType) => {
  try {
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userCredentials.email,
        password: userCredentials.password,
      }),
    });
    const data: LoginResponseData = await response.json();

    return data.token;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};

export const getClubs = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/clubs', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const data: ClubsResponse = await response.json();

    return data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};
