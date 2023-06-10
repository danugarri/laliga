import { call, put, takeEvery } from 'redux-saga/effects';
import { patchFavorite } from './favorite.slice';
import { Club } from '../../components/Clubs/clubs.types';
import { PayloadAction } from '@reduxjs/toolkit';
import { updateClub } from '../../api/api';

function* patchFavoriteAsync(action: PayloadAction<Club>): Generator<any, void, Club> {
  try {
    const response: Club = yield call(updateClub, action.payload);
    yield put(patchFavorite(response));
  } catch (error) {
    alert(JSON.stringify(error));
  }
}

export default function* favoriteSaga(): Generator<any, void, Club> {
  yield takeEvery('clubs/patchAsyncFavorite', patchFavoriteAsync);
}
