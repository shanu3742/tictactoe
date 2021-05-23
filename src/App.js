import React, { useState } from 'react';

import Board from './component/Board';
import History from './History';
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

  // winner calculate

  const { winner, winningSquares } = calculateWinner(current.board);
  let message = null;
  // console.log(winner);

  if (!winner && !noMoveLeft) {
    message = `${current.isXNext ? Secondplayer : Firstplayer} Term`;
  }
  if (!winner && noMoveLeft) {
    message = (
      <>
        Draw B/W <span style={{ color: 'red' }}> {Firstplayer}</span> and
        <span style={{ color: 'red' }}> {Secondplayer}</span>
      </>
    );
  }

  if (winner === 'o') {
    message = (
      <>
        Winner is <span className="text-green">{Firstplayer}</span>
      </>
    );
  } else if (winner === 'x') {
    message = (
      <>
        Winner is <span className="text-orange">{Firstplayer}</span>
      </>
    );
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
  const moveTo = move => {
    setCurrentMove(move);
  };
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className="app">
      <h1>
        Tic <span className="text-green">Tac</span> Toe
      </h1>

      <h2>{message}</h2>
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        className={`btn-reset ${winner ? 'active' : ''}`}
        onClick={refreshPage}
      >
        Start new Game
      </button>
      <h2 style={{ fontWeight: 'normal' }}>Current Game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
      <h4>
        Developed By{' '}
        <span
          style={{ color: 'green', background: 'red', borderRadius: '50%' }}
        >
          @
        </span>
        <span style={{ color: 'white' }}>Shanu</span>
      </h4>
      <div className="bg-balls" />
    </div>
  );
};
export default App;
