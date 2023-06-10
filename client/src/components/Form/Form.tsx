import { FormControl, FormLabel, Input, Switch } from '@chakra-ui/react';
import { FiltersType } from '../../sagas/clubs/clubs.sagas';

export type FormProps = {
  updateFilters: (filters: FiltersType, filter: string, value: any) => void;
  filters: FiltersType;
};
export const Form = ({ filters, updateFilters }: FormProps) => {
  return (
    <FormControl>
      <FormLabel>Nombre del club</FormLabel>
      <Input type="text" onChange={(e) => updateFilters(filters, 'name_like', e.target.value)} />
      <FormLabel>Filtrar por favoritos</FormLabel>
      <Switch
        id="filter-by-favorites"
        onChange={(e) => updateFilters(filters, 'favorite', e.target.checked)}
      />
    </FormControl>
  );
};
