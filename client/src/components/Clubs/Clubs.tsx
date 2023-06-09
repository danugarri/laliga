import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { selectClubs, selectClubsStatus } from '../../sagas/clubs/clubs.selectors';
import { Box, IconButton, Image, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Club } from './clubs.types';

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
        clubs.map((club) => <section key={club.id}>{newFunction(club)}</section>)
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );

  function newFunction(club: Club) {
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" margin={4}>
        <Image src={club.avatar} alt="club" borderRadius="full" boxSize="70px" />
        <Text fontSize="md">{club.name}</Text>
        <Text fontSize="sm">{club.foundationDate}</Text>

        <IconButton
          colorScheme={club.favorite === true ? 'blue' : 'red'}
          aria-label="Call Segun"
          size="md"
          icon={<StarIcon />}
        />
      </Box>
    );
  }
};
