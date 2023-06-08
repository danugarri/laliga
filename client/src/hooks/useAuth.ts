import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [isAuthorised, setIsAuthorised] = useState(false);

  useEffect(() => {
    const checkIsAuthorised = () => {
      const token = localStorage.getItem('token');
      setIsAuthorised(!!token);
    };

    // Initial check
    checkIsAuthorised();

    // Listen for changes in localStorage
    const handleStorageChange = () => {
      checkIsAuthorised();
    };

    // Add event listener for storage change
    window.addEventListener('storage', handleStorageChange);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return {
    isAuthorised,
  };
};
