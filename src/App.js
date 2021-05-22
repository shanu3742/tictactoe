import React, { useState } from 'react';

import Board from './component/Board';
import { calculateWinner } from './helpers';
import './style/root.scss';

const Firstplayer = prompt('Enter Firstplayer name');
const Secondplayer = prompt('Enter Secondplayer name');

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: false },
  ]);

  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove];

  // it check if any board is not fill with o and x it set to be false else true

  const noMoveLeft = current.board.every(el => el != null);
  console.log(noMoveLeft);

  // winner calculate

  const winner = calculateWinner(current.board);
  let message = null;
  // console.log(winner);

  if (!winner && !noMoveLeft) {
    message = `${current.isXNext ? Secondplayer : Firstplayer} Term`;
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
    if (current.board[poistion] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === poistion) {
          return last.isXNext ? 'x' : 'o';
        }

        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    setCurrentMove(prev => prev + 1);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
