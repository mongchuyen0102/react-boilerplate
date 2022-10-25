import './App.css';

import { AxiosError, AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useRequest } from './hooks/use-http.hook';

const App: React.FC = () => {
  const [data, setData] = useState({});
  const [sendHttpRequest] = useRequest();

  useEffect(() => {
    sendHttpRequest({
      url: 'https://jsonplaceholder.typicode.com/todos/1',
    })
      .then((response: AxiosResponse) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error: AxiosError) => {
        console.log(error.response);
      });
  }, []);

  return <div>{JSON.stringify(data)}</div>;
};

export default App;
