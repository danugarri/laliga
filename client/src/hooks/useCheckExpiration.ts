import { useEffect, useState } from 'react';

export const useCheckExpiration = () => {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const tokenStored = localStorage.getItem('token');
    if (tokenStored) {
      //   extract the jwt payload
      const payload = tokenStored.split('.')[1];
      // Decoding the Base64-encoded payload
      const decodedPayload = atob(payload);
      const parsedPayload = JSON.parse(decodedPayload);

      const expirationTime = parsedPayload.exp;
      // Multiplying by 1000 to convert from seconds to milliseconds
      // const humanDate = new Date(parsedPayload.exp * 1000);
      // console.log(humanDate);
      // Check if the token has expired
      const currentTime: number = Math.floor(Date.now() / 1000); // Convert to seconds
      if (expirationTime && expirationTime < currentTime) {
        console.log('Token has expired');
        setIsExpired(true);
      }
    }
  }, []);

  return isExpired;
};
