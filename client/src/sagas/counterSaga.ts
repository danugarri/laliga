// src/sagas/counterSaga.ts

import { put, takeEvery } from 'redux-saga/effects';
import { incrementByAmount } from '../features/counterSlice';

function* incrementAsync(action: ReturnType<typeof incrementByAmount>) {
  // Simulate an API call or async operation
  yield new Promise((resolve) => setTimeout(resolve, 1000));
  yield put(incrementByAmount(action.payload));
}

export default function* counterSaga() {
  yield takeEvery(incrementByAmount.type, incrementAsync);
}
