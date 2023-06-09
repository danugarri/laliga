import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TokenState {
  status: 'loading' | 'resolved';
  token: string | undefined;
}

const initialState: TokenState = {
  status: 'loading',
  token: undefined,
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.status = 'resolved';
      state.token = action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;
