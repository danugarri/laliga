import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import counterReducer from '../features/counterSlice';
import authReducer from '../features/auth.Slice';
import counterSaga from '../sagas/counterSaga';
import { useDispatch } from 'react-redux';

export function* rootSaga() {
  yield all([counterSaga()]);
}

export const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      counter: counterReducer,
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = configureAppStore();
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
