import React, {FC} from 'react';
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
  ];
  return (
    <>
      <Helmet htmlAttributes={{lang: 'ja'}}>
        <title>{title}</title>
      </Helmet>
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      <FormTemplate />
      <Todolist todos={todos} />
    </>
  );
};

export default App;
