import { Button, Stack, Text } from '@chakra-ui/react';

export const Pagination = () => {
  return (
    <Stack direction="row" spacing={4} align="center" justifyContent={'center'} margin={2}>
      <Text fontSize="md">{`Pág${'1'}`}</Text>
      <Button colorScheme="teal" variant="solid">
        Anterior
      </Button>
      <Button colorScheme="teal" variant="outline">
        Siguiente
      </Button>
    </Stack>
  );
};
