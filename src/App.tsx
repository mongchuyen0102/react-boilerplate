import './App.css';

import React, { useEffect, useState } from 'react';
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
    <div>
      {data.map((user, index) => (
        <h1 key={index}>{user.name}</h1>
      ))}
    </div>
  );
};

export default App;
