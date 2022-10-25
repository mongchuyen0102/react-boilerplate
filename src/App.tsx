import './App.css';

import React from 'react';
import { useRequest } from './hooks/use-http.hook';

const App: React.FC = () => {
  const [response, , sendHttpRequest] = useRequest();

  sendHttpRequest({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
  });

  return <div>{JSON.stringify(response)}</div>;
};

export default App;
