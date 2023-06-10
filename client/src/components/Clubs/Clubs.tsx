import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { selectClubs, selectClubsStatus } from '../../sagas/clubs/clubs.selectors';
import {
  Box,
  Image,
  Text,
  Icon,
  Card,
  CardBody,
  Flex,
  Spacer,
  Switch,
  Stack,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { Pagination } from '../Pagination/Pagination';
import { FiltersType } from '../../sagas/clubs/clubs.sagas';
import { Form } from '../Form/Form';

export const Clubs = ({
  setIsAuthorised,
}: {
  setIsAuthorised: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
          <Form filters={filters} updateFilters={updateFilters} setIsAuthorised={setIsAuthorised} />
          <Stack direction="row" spacing={4} align="center" justifyContent={'center'} margin={2}>
            {clubs.map((club) => (
              <Card key={club.id} maxW={'sm'}>
                <CardBody maxW="sm" margin={4}>
                  <Flex>
                    <Box>
                      <Image src={club.avatar} alt="club" borderRadius="full" boxSize="70px" />
                      <Text fontSize="md">{club.name}</Text>
                      <Text fontSize="sm">{club.foundationDate}</Text>
                    </Box>
                    <Spacer />
                    <Box>
                      <Icon
                        as={StarIcon}
                        w={8}
                        h={8}
                        color={club.favorite === true ? 'orange' : 'grey'}
                      />

                      <Switch
                        id="updated-favorite"
                        checked={club.favorite}
                        onChange={() => {
                          console.log(club);

                          dispatch({ type: 'clubs/patchAsyncFavorite', payload: club });
                          dispatch({ type: 'clubs/getAsyncClubs', payload: filters });
                        }}
                      />
                    </Box>
                  </Flex>
                </CardBody>
              </Card>
            ))}
          </Stack>
          <Pagination updateFilters={updateFilters} filters={filters} />
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
};
