import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { Login } from '../Login/Login';
import { routes } from '../../routes';
import { Clubs } from '../Clubs/Clubs';

export const RouterComponent = ({ isAuthorised }: { isAuthorised: boolean }) => {
  return (
    <Router>
      <Routes>
        <Route
          path={`${routes.default}`}
          element={
            isAuthorised ? (
              <Navigate to={`${routes.clubs}`} replace />
            ) : (
              <Navigate to={`${routes.login}`} />
            )
          }
        />
        <Route
          path={`${routes.login}`}
          element={isAuthorised ? <Navigate to={`${routes.clubs}`} replace /> : <Login />}
        />
        <Route
          path={`${routes.clubs}`}
          element={isAuthorised ? <Clubs /> : <Navigate to={`${routes.login}`} />}
        />
      </Routes>
    </Router>
  );
};
