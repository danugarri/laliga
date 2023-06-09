import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getToken } from '../api/api';
import { UserCredentialsType } from '../components/Login/Login.types';

interface TokenState {
  status: 'loading' | 'resolved';
  token: string | null;
}

const initialState: TokenState = {
  status: 'loading',
  token: null,
};

export const getAsyncToken = createAsyncThunk(
  'GET_TOKEN',
  async (userCredentials: UserCredentialsType) => {
    const response = await getToken(userCredentials);
    return response;
  }
);

const getAsyncTokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncToken.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAsyncToken.fulfilled, (state, action) => {
        state.status = 'resolved';
        state.token = action.payload;
      });
  },
});

export default getAsyncTokenSlice.reducer;
