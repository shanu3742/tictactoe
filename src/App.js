import React, { useState } from 'react';
import Board from './component/Board';
import './style/root.scss';

const App = () => {
  const [board, setboard] = useState(Array(9).fill(null));

  // set next clicked

  const [isXNext, setXNext] = useState(false);

  const handleSquareClick = poistion => {
    if (board[poistion]) {
      return;
    }
    setboard(prev => {
      return prev.map((square, pos) => {
        if (pos === poistion) {
          return isXNext ? 'x' : 'o';
        }
        return square;
      });
    });
    setXNext(prev => !prev);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>Message</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
