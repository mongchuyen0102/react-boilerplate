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
      <table>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Website</th>
          <th>Phone</th>
          <th>Company</th>
        </tr>

        {data.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
              {user.address.street} - {user.address.city}
            </td>
            <td>{user.website}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
