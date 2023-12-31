import { all } from 'redux-saga/effects';
import authSaga from './auth/auth.sagas';
import clubsSaga from './clubs/clubs.sagas';
import favoriteSaga from './favorite/favorite.sagas';

export default function* rootSaga(): Generator<any, void, any> {
  yield all([authSaga(), clubsSaga(), favoriteSaga()]);
}
