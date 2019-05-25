import React, {FC, useEffect, useState, SyntheticEvent} from 'react';
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
      description: 'typescriptの使い方',
    },
    {
      id: 2,
      title: 'react',
      description: 'hooksの使い方',
    },
  ];
  const [Todos, setTodos] = useState(todos);
  // const create = (t: string, d: string) => {
  //   const data: Todo = {
  //     id: todos.length,
  //     title: 'react',
  //     description: 'redux',
  //   };
  //   setTodos([...Todos, data]);
  //   console.log(Todos);
  //   console.log(t);
  //   console.log(d);
  //   console.log('create');
  // };
  const create = (e: SyntheticEvent) => {
    const data: Todo = {
      id: Todos.length,
      title: 'aaa',
      description: 'redux',
    };
    setTodos([...Todos, data]);
    console.log(Todos);
    e.preventDefault();
    console.log((e.target as HTMLElement).title);
    console.log(e.target as HTMLElement);
    console.log('create');
  };
  const dele = (id: number) => {
    Todos.splice(id, 1);
    setTodos(Todos);
    console.log(Todos);
    console.log('delete');
  };
  return (
    <>
      <Helmet htmlAttributes={{lang: 'ja'}}>
        <title>{title}</title>
      </Helmet>
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      {/* もしかしたらレンダリング？ */}
      <FormTemplate create={create} />
      <Todolist todos={Todos} dele={dele} />
    </>
  );
};

export default App;
