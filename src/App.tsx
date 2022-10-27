import './App.css';

import React from 'react';
import { LogProvider } from './LogProvider';
import Demo from './components/Demo';
import ErrorMessage from './components/ErrorMessage';

export interface ITodo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const App: React.FC = () => {
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
