import { all } from 'redux-saga/effects';
import authSaga from './auth.sagas';

export default function* rootSaga(): Generator<any, void, any> {
  yield all([authSaga()]);
}
