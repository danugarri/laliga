import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Club } from '../../components/Clubs/clubs.types';

export interface favoriteState {
  status: 'loading' | 'resolved';
  club: Club | null;
}

const initialState: favoriteState = {
  status: 'loading',
  club: null,
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    patchFavorite: (state, action: PayloadAction<Club>) => {
      state.status = 'resolved';
      state.club = action.payload;
    },
  },
});

export const { patchFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
