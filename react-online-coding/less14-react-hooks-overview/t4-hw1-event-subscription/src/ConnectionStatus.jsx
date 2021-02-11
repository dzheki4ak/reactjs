import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setSatus] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setSatus(true);
    };

    const handleOffline = () => {
      setSatus(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className={status ? 'status' : 'status status_offline'}>
      {status ? 'online' : 'offline'}
    </div>
  );
};

export default ConnectionStatus;
