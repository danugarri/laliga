import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { selectClubs, selectClubsStatus } from '../../sagas/clubs/clubs.selectors';
import { Box, Image, Text, Icon, Card, CardBody, Flex, Spacer } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Pagination } from '../Pagination/Pagination';
import { FiltersType } from '../../sagas/clubs/clubs.sagas';

export const Clubs = () => {
  const [filters, setFilters] = useState<FiltersType>({
    limit: 6,
    offset: 0,
    favorite: false,
    name_like: '',
  });
  const clubs = useSelector(selectClubs);
  const clubsStatusRequest = useSelector(selectClubsStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({ type: 'clubs/getAsyncClubs', payload: filters });
  }, [dispatch, filters]);
  const updateFilters = (filters: FiltersType, filter: string, value: any) =>
    setFilters({
      ...filters,
      [filter]: value,
    });

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
          <Pagination updateFilters={updateFilters} filters={filters} />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
