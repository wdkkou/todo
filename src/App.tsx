import React, { FC } from 'react';
import './App.css';
import Form from './containers/Form';
import Todolist from './containers/Todolist';

const title = 'reactでtodoアプリ';
const App: FC = () => {
  return (
    <>
      <title> React todoアプリ</title>
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      <Form />
      <Todolist />
    </>
  );
};

export default App;
