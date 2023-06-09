import { call, put, takeEvery } from 'redux-saga/effects';
import { setClubs } from './clubs.slice';
import { getClubs } from '../../api/api';
import { ClubsResponse } from '../../components/Clubs/clubs.types';

function* fetchClubs(): Generator<any, void, ClubsResponse> {
  try {
    const response: ClubsResponse = yield call(getClubs);
    yield put(setClubs(response));
  } catch (error) {
    alert(JSON.stringify(error));
  }
}

export default function* clubsSaga(): Generator<any, void, ClubsResponse> {
  yield takeEvery('clubs/getAsyncClubs', fetchClubs);
}
