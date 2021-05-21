import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setboard] = useState(Array(9).fill(2));

  const handleSquareClick = () => {
    setboard('x');
  };
  const rendersquare = poistion => {
    return (
      <Square
        value={board[poistion]}
        onClick={() => {
          handleSquareClick(poistion);
        }}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>

      <div className="board-row">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>

      <div className="board-row">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  );
};

export default Board;
