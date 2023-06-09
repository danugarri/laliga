import { useEffect } from 'react';

import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { selectClubs, selectClubsStatus } from '../../sagas/clubs/clubs.selectors';

export const Clubs = () => {
  const clubs = useSelector(selectClubs);
  const clubsStatusRequest = useSelector(selectClubsStatus);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch({ type: 'clubs/getAsyncClubs' });
  }, [dispatch]);
  return (
    <div>
      {clubsStatusRequest === 'resolved' ? (
        clubs.map((club) => <p key={club.id}>{club.name}</p>)
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};
