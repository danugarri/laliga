import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from '../sagas/auth/auth.slice';
import clubsReducer from '../sagas/clubs/clubs.slice';
import { useDispatch } from 'react-redux';
import rootSaga from '../sagas/root.sagas';

export const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      auth: authReducer,
      clubs: clubsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = configureAppStore();
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
