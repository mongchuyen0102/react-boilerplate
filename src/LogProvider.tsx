import { createContext, useContext, useEffect, useState } from 'react';

const LogContext = createContext<any>(null);

const LogProvider = (props: any): any => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const listener = (event: ErrorEvent): void => {
      const { message, filename, colno, lineno, error } = event;
      const errorMessage = [
        'Message: ' + message,
        'URL: ' + filename,
        `Line: ${lineno}`,
        `Column: ${colno}`,
        'Error object: ' + JSON.stringify(error),
      ].join('\n');
      props.handler(errorMessage);
      setErrorMessage(errorMessage);
    };

    window.addEventListener('error', listener);
    return () => {
      window.removeEventListener('error', listener);
    };
  }, []);

  const contextValue = { errorMessage, setErrorMessage };
  return (
    <LogContext.Provider value={contextValue} {...props}></LogContext.Provider>
  );
};

const useLog = (): { errorMessage: string; setErrorMessage: Function } => {
  const context = useContext(LogContext);
  if (typeof context === 'undefined') {
    throw new Error('useLog must be used within a LogProvider');
  }
  return context;
};

export { LogProvider, useLog };
