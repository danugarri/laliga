import { useEffect } from 'react';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { selectClubs, selectClubsStatus } from '../../sagas/clubs/clubs.selectors';
import { Box, Image, Text, Icon, Card, CardBody, Flex, Spacer } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Pagination } from '../Pagination/Pagination';

export const Clubs = () => {
  const clubs = useSelector(selectClubs);
  const clubsStatusRequest = useSelector(selectClubsStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'clubs/getAsyncClubs' });
  }, [dispatch]);

  return (
    <>
      {clubsStatusRequest === 'resolved' ? (
        <div>
          {clubs.map((club) => (
            <section key={club.id}>
              {
                <Card>
                  <CardBody maxW="sm" borderWidth="1px" borderRadius="lg" margin={4}>
                    <Flex>
                      <Box>
                        <Image src={club.avatar} alt="club" borderRadius="full" boxSize="70px" />
                        <Text fontSize="md">{club.name}</Text>
                        <Text fontSize="sm">{club.foundationDate}</Text>
                      </Box>
                      <Spacer />
                      <Icon
                        as={StarIcon}
                        w={8}
                        h={8}
                        color={club.favorite === true ? 'orange' : 'grey'}
                      />
                    </Flex>
                  </CardBody>
                </Card>
              }
            </section>
          ))}
          <Pagination />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
