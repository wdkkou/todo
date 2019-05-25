import React, {FC, useState} from 'react';
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
  const create = (e: Event) => {
    // let element:
    e.preventDefault();
    console.log((e.target as HTMLInputElement).title);
    const data: Todo = {
      id: Todos.length + 1,
      title: '',
      description: 'example',
    };
    setTodos(() => [...Todos, data]);
    console.log('create ok');
  };
  // const del = () => {
  //   const id = 1;
  //   Todos.splice(id, 1);
  //   setTodos([...Todos]);
  // };
  const del = (id: number) => {
    Todos.splice(id, 1);
    setTodos([...Todos]);
    console.log('delte ok');
  };
  return (
    <>
      <Helmet htmlAttributes={{lang: 'ja'}}>
        <title>{title}</title>
      </Helmet>
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      {console.log(Todos)}
      <FormTemplate create={create} todos={Todos} />
      <Todolist todos={Todos} del={del} />
      {console.log(Todos)}
    </>
  );
};

export default App;
