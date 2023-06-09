import { RootState } from '../../store/store.types';

export const selectToken = (state: RootState): string | undefined => state.auth.token;
