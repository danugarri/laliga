import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { routes } from '../../routes';

export const PrivateRoute = ({ component }: { component: JSX.Element }) => {
  const { isAuthorised } = useAuth();
  const location = useLocation();

  return isAuthorised ? (
    component
  ) : (
    <Navigate to={routes.login} replace={true} state={{ from: location }} />
  );
};
