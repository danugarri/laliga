import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Club, ClubsResponse } from '../../components/Clubs/clubs.types';

export interface ClubsState {
  status: 'loading' | 'resolved';
  clubs: Club[];
  size: number;
}

const initialState: ClubsState = {
  status: 'loading',
  clubs: [],
  size: 0,
};

const clubsSlice = createSlice({
  name: 'clubs',
  initialState,
  reducers: {
    setClubs: (state, action: PayloadAction<ClubsResponse>) => {
      state.status = 'resolved';
      state.clubs = action.payload.results;
      state.size = action.payload.total;
    },
  },
});

export const { setClubs } = clubsSlice.actions;
export default clubsSlice.reducer;
