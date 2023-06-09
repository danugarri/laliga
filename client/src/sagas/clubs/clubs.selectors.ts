import { Club } from '../../components/Clubs/clubs.types';
import { RootState } from '../../store/store.types';

export const selectClubs = (state: RootState): Club[] => state.clubs.clubs;
export const selectClubsStatus = (state: RootState): 'resolved' | 'loading' => state.clubs.status;
