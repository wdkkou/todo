import React from 'react';
import {Helmet} from 'react-helmet';
import './App.css';

const title = '俺はtodoアプリを作るぞ！';
const App: React.FC = () => {
  return (
    <div className="App">
      <Helmet htmlAttributes={{lang: 'ja'}}>
        <title>{title}</title>
      </Helmet>
    </div>
  );
};

export default App;
