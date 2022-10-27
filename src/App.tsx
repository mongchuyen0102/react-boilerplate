import './App.css';

import React, { useEffect, useState } from 'react';
import { LogProvider } from './LogProvider';
import Demo from './components/Demo';
import ErrorMessage from './components/ErrorMessage';
import { useRequest } from './hooks/use-request.hook';
import { IUser } from './interfaces/user.interface';

export interface ITodo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState<IUser[]>([]);
  const [sendHttpRequest] = useRequest();

  useEffect(() => {
    sendHttpRequest({
      url: '/users',
    })
      .then((data: IUser[]) => {
        setData(data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <LogProvider>
        <Demo />
        <ErrorMessage />
      </LogProvider>
    </div>
  );
};

export default App;
