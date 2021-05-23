import React from 'react';

const Square = ({ value, onClick, iswinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{
        color: iswinningSquare ? 'green' : 'red',
        fontWeight: iswinningSquare ? 'Bold' : 'normal',
      }}
    >
      {value}
    </button>
  );
};

export default Square;
