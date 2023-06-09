import { call, put, takeEvery } from 'redux-saga/effects';
import { setClubs } from './clubs.slice';
import { getClubs } from '../../api/api';
import { ClubsResponse } from '../../components/Clubs/clubs.types';
import { PayloadAction } from '@reduxjs/toolkit';
export type FiltersType = {
  offset: number;
  limit: number;
  favorite?: boolean;
  name_like?: string;
};
function* fetchClubs(action: PayloadAction<FiltersType>): Generator<any, void, ClubsResponse> {
  try {
    const response: ClubsResponse = yield call(getClubs, action.payload);
    yield put(setClubs(response));
  } catch (error) {
    alert(JSON.stringify(error));
  }
}

export default function* clubsSaga(): Generator<any, void, ClubsResponse> {
  yield takeEvery('clubs/getAsyncClubs', fetchClubs);
}
