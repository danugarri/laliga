import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Switch } from '@chakra-ui/react';
import { debounce } from 'lodash';
import { FiltersType } from '../../sagas/clubs/clubs.sagas';

export type FormProps = {
  updateFilters: (filters: FiltersType, filter: string, value: any) => void;
  filters: FiltersType;
};

export const Form = ({ filters, updateFilters }: FormProps) => {
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
    <FormControl>
      <FormLabel>Nombre del club</FormLabel>
      <Input type="text" onChange={handleSearchChange} value={searchValue} />
      <FormLabel>Filtrar por favoritos</FormLabel>
      <Switch
        id="filter-by-favorites"
        onChange={(e) => updateFilters(filters, 'favorite', e.target.checked)}
      />
    </FormControl>
  );
};
