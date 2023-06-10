import { useEffect, useState } from 'react';
import { Button, Stack, Text } from '@chakra-ui/react';
import { FiltersType } from '../../sagas/clubs/clubs.sagas';
import { useSelector } from 'react-redux';
import { selectClubs } from '../../sagas/clubs/clubs.selectors';

export type PaginationProps = {
  updateFilters: (filters: FiltersType, filter: string, value: any) => void;
  filters: FiltersType;
};
export const Pagination = ({ updateFilters, filters }: PaginationProps) => {
  const [isClickable, setIsClickable] = useState(true);
  const resultsPerPage = useSelector(selectClubs);
  useEffect(() => {
    const updatePage = () => {
      if (filters.offset > 0) {
        setIsClickable(true);
      }
      if (filters.offset === 0) {
        setIsClickable(false);
      }
    };
    updatePage();
  }, [filters]);
  return (
    <Stack direction="row" spacing={4} align="center" justifyContent={'center'} margin={2}>
      <Text fontSize="md">{`Pág ${filters.offset / filters.limit}`}</Text>
      <Button
        colorScheme="teal"
        variant="solid"
        onClick={() => updateFilters(filters, 'offset', filters.offset - filters.limit)}
        isDisabled={!isClickable}
      >
        Anterior
      </Button>
      <Button
        isDisabled={resultsPerPage.length === 0}
        colorScheme="teal"
        variant="outline"
        onClick={() => updateFilters(filters, 'offset', filters.offset + filters.limit)}
      >
        Siguiente
      </Button>
    </Stack>
  );
};
