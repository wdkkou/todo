import React, { FC } from 'react';
import Helmet from 'react-helmet';
import './App.css';
import Form from './containers/Form';
import Todolist from './containers/Todolist';

const title = 'reactでtodoアプリ';
const App: FC = () => {
  return (
    <>
      <Helmet>
        <title> React todoアプリ</title>
      </Helmet>
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      <Form />
      <Todolist />
    </>
  );
};

export default App;
