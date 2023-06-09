import { Button, Stack, Text } from '@chakra-ui/react';
import { FiltersType } from '../../sagas/clubs/clubs.sagas';

export type PaginationProps = {
  updateFilters: (filters: FiltersType, filter: string, value: any) => void;
  filters: FiltersType;
};
export const Pagination = ({ updateFilters, filters }: PaginationProps) => {
  return (
    <Stack direction="row" spacing={4} align="center" justifyContent={'center'} margin={2}>
      <Text fontSize="md">{`Pág ${filters.offset}`}</Text>
      <Button
        colorScheme="teal"
        variant="solid"
        onClick={() => updateFilters(filters, 'offset', filters.offset - 1)}
      >
        Anterior
      </Button>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={() => updateFilters(filters, 'offset', filters.offset + 1)}
        disabled
      >
        Siguiente
      </Button>
    </Stack>
  );
};
