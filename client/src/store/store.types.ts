import { AuthState } from '../sagas/auth/auth.slice';
import { ClubsState } from '../sagas/clubs/clubs.slice';

export type RootState = {
  auth: AuthState;
  clubs: ClubsState;
};
