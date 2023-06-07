import { useEffect, useState } from 'react';
export const useAuth = () => {
  const [isAuthorised, setIsAuthorised] = useState(false);

  const token = localStorage.getItem('token');
  useEffect(() => {
    token && token?.length > 0 ? setIsAuthorised(true) : setIsAuthorised(false);
  }, [token]);

  return {
    isAuthorised,
  };
};
