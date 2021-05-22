import React, { useState } from 'react';

import Board from './component/Board';
import { calculateWinner } from './helpers';
import './style/root.scss';

const Firstplayer = prompt('Enter Firstplayer name');
const Secondplayer = prompt('Enter Secondplayer name');

const App = () => {
  const [board, setboard] = useState(Array(9).fill(null));

  // it check if any board is not fill with o and x it set to be false else true

  const noMoveLeft = board.every(el => el != null);

  // set next clicked

  const [isXNext, setXNext] = useState(false);

  // winner calculate

  const winner = calculateWinner(board);
  let message = null;
  // console.log(winner);

  if (!winner && !noMoveLeft) {
    message = `${isXNext ? Secondplayer : Firstplayer} Term`;
  }
  if (!winner && noMoveLeft) {
    message = `Draw B/W ${Firstplayer} and ${Secondplayer}`;
  }

  if (winner === 'o') {
    message = `${Firstplayer} win`;
  } else if (winner === 'x') {
    message = `${Secondplayer} win`;
  }

  const handleSquareClick = poistion => {
    if (board[poistion] || winner) {
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
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
