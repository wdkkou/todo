import React, { FC } from 'react';
import './App.css';
import Form from './containers/Form';

const title = 'reactでtodoアプリ';
const App: FC = () => {
  return (
    <>
      <title>{title}</title>
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      <Form />
      {/* <Todolist todos={Todos} dele={dele} /> */}
    </>
  );
};

export default App;
