import React, { FC, useState } from 'react';
// import {Helmet} from 'react-helmet';
import './App.css';
import FormTemplate from './components/Form';
import Todolist, { Todo } from './components/Todolist';

const title = '俺はtodoアプリを作るぞ！！！！！！';
const App: FC = () => {
  const todos: Todo[] = [
    {
      id: 1,
      title: 'react',
      description: 'typescriptの使い方',
    },
  ];
  const [Todos, setTodos] = useState(todos);
  const create = (t: string, d: string) => {
    const data: Todo = {
      id: Todos.length + 1,
      title: t,
      description: d,
    };
    setTodos([...Todos, data]);
  };
  const dele = (id: number) => {
    Todos.splice(id, 1);
    setTodos([...Todos]);
  };

  return (
    <>
      {/* <Helmet htmlAttributes={{lang: 'ja'}}> */}
      <title>{title}</title>
      {/* </Helmet> */}
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      <FormTemplate create={create} />
      <Todolist todos={Todos} dele={dele} />
    </>
  );
};

export default App;
