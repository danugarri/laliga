import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectToken } from '../features/auth.selectors';

export const useAuth = () => {
  const [isAuthorised, setIsAuthorised] = useState(!!localStorage.getItem('token'));

  const token = useSelector(selectToken);
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      setIsAuthorised(!!token);
    }
  }, [token]);

  return {
    isAuthorised,
  };
};
