import React, { useEffect, useState } from 'react';
import { getClubs } from '../../api/api';
import { Club, ClubsResponse } from './clubs.types';

export const Clubs = () => {
  const [clubs, setClubs] = useState<Club[]>([]);
  useEffect(() => {
    const getAsynClubsList = async () => {
      const response: ClubsResponse = await getClubs(
        JSON.stringify(localStorage.getItem('token')!)
      );
      setClubs(response.results);
    };
    getAsynClubsList();
  }, []);
  return (
    <div>
      {clubs.map((club) => (
        <p>{club.name}</p>
      ))}
    </div>
  );
};
