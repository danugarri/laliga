import { Club, ClubsResponse } from '../components/Clubs/clubs.types';
import { LoginResponseData, UserCredentialsType } from '../components/Login/Login.types';
import { FiltersType } from '../sagas/clubs/clubs.sagas';

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

export const getClubs = async (filters: FiltersType) => {
  const { offset, limit, favorite, name_like } = filters;
  const favoriteQuery = !!favorite ? `&favorite=${favorite}` : undefined;
  try {
    const response = await fetch(
      `http://localhost:4000/api/clubs?offset=${offset}&limit=${limit}${favoriteQuery}&name_like=${name_like}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );
    const data: ClubsResponse = await response.json();

    return data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};

export const updateClub = async ({ favorite, id }: Club) => {
  try {
    const response = await fetch(`http://localhost:4000/api/clubs/${id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ favorite: !favorite }),
    });
    const data: Club = await response.json();

    return data;
  } catch (error) {
    alert(JSON.stringify(error));
  }
};
