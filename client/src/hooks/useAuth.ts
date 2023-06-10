import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../sagas/auth/auth.selectors';

import { useCheckExpiration } from './useCheckExpiration';

export const useAuth = () => {
  const [isAuthorised, setIsAuthorised] = useState(!!localStorage.getItem('token'));

  const isExpired = useCheckExpiration();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      setIsAuthorised(!!token);
    }
    if (isExpired) {
      localStorage.clear();
      setIsAuthorised(false);
    }
  }, [token, isExpired]);

  return {
    isAuthorised,
    setIsAuthorised,
  };
};
