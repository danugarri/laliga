import { call, put, takeEvery } from 'redux-saga/effects';
import { setToken } from './auth.slice';
import { getToken } from '../api/api';
import { UserCredentialsType } from '../components/Login/Login.types';
import { PayloadAction } from '@reduxjs/toolkit';

function* fetchToken(action: PayloadAction<UserCredentialsType>): Generator<any, void, string> {
  try {
    const response: string = yield call(getToken, action.payload);
    yield put(setToken(response));
  } catch (error) {
    alert(JSON.stringify(error));
  }
}

export default function* authSaga(): Generator<any, void, string> {
  yield takeEvery('token/getAsyncToken', fetchToken);
}
