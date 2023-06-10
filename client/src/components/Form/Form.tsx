import React, { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Stack, Switch } from '@chakra-ui/react';
import { debounce } from 'lodash';
import { FiltersType } from '../../sagas/clubs/clubs.sagas';

export type FormProps = {
  updateFilters: (filters: FiltersType, filter: string, value: any) => void;
  filters: FiltersType;
  setIsAuthorised: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Form = ({ filters, updateFilters, setIsAuthorised }: FormProps) => {
  const [searchValue, setSearchValue] = useState('');

  const debouncedSearch = debounce((value) => {
    updateFilters(filters, 'name_like', value);
  }, 3000);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    debouncedSearch(value);
  };

  return (
    <Stack
      direction={['column', 'row']}
      align="center"
      justifyContent={'space-between'}
      marginTop={8}
      marginLeft={8}
      marginRight={8}
    >
      <FormControl maxWidth={'80'}>
        <FormLabel>Nombre del club</FormLabel>
        <Input type="text" onChange={handleSearchChange} value={searchValue} />
        <FormLabel>Filtrar por favoritos</FormLabel>
        <Switch
          id="filter-by-favorites"
          onChange={(e) => updateFilters(filters, 'favorite', e.target.checked)}
        />
      </FormControl>
      <Button
        minWidth={'fit-content'}
        colorScheme="teal"
        variant="solid"
        onClick={() => {
          localStorage.clear();
          setIsAuthorised(false);
        }}
      >
        Cerrar Sesión
      </Button>
    </Stack>
  );
};
