import React, {FC} from 'react';
import {Helmet} from 'react-helmet';
import './App.css';

const title = '俺はtodoアプリを作るぞ！！！！！！';
const App: FC = () => {
  return (
    <>
      <Helmet htmlAttributes={{lang: 'ja'}}>
        <title>{title}</title>
      </Helmet>
      <header className="App-header">
        <h1>{title}</h1>
      </header>
    </>
  );
};

export default App;
