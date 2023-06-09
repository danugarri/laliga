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

export const getClubs = async (token: string) => {
  try {
    console.log(token);

    const payload = token.split('.')[1];
    const decodedPayload = atob(payload); // Decoding the Base64-encoded payload
    const parsedPayload = JSON.parse(decodedPayload);
    const expirationTime = new Date(parsedPayload.exp * 1000); // Multiplying by 1000 to convert from seconds to milliseconds

    console.log(expirationTime);
    const response = await fetch('http://localhost:4000/api/clubs', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZha2UudXNlckBmYWtlLmNvbSIsImlhdCI6MTY4NjMzMTU1NywiZXhwIjoxNjg2MzM1MTU3fQ.30qT6UtBkaGu7WVGyBk2IX2GEfkLkvRA-66fL_62OiI`,
      },
    });
    const data = await response.json();

    return data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};
