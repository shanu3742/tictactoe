import React from 'react';
import Board from './component/Board';
import './style/root.scss';

const App = () => {
  return (
    <div className="app">
      <h1>Tic Tac Tac</h1>
      <Board />
    </div>
  );
};
export default App;
