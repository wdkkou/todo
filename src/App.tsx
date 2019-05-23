import React, {FC, useEffect, useState} from 'react';
import {Helmet} from 'react-helmet';
import './App.css';
import FormTemplate from './components/Form';
import Todolist, {Todo} from './components/Todolist';

const title = '俺はtodoアプリを作るぞ！！！！！！';
const App: FC = () => {
  const todos: Todo[] = [
    {
      id: 1,
      title: 'react',
      description: 'typescriptで勉強',
    },
    {
      id: 2,
      title: '研究',
      description: '完全定義',
    },
  ];
  const [Todos, setTodos] = useState(todos);
  const create = () => {};
  const dele = () => {};
  return (
    <>
      <Helmet htmlAttributes={{lang: 'ja'}}>
        <title>{title}</title>
      </Helmet>
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      <FormTemplate create={create} dele={dele} />
      <Todolist todos={Todos} />
    </>
  );
};

export default App;
