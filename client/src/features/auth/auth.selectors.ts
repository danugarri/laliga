import { RootState } from '../../store/store.types';

export const selectToken = (state: RootState): string => state.auth.token;
