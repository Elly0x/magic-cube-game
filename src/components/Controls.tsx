import React from 'react';

type Props = {
  onShuffle: () => void;
  onSolve: () => void;
  onMove: (move: string) => void;
};

const Controls: React.FC<Props> = ({ onShuffle, onSolve, onMove }) => {
  return (
    <div className="controls">
      <button onClick={onShuffle}>Shuffle</button>
      <button onClick={onSolve}>Solve</button>
      <button onClick={() => onMove('R')}>Rotate R</button>
    </div>
  );
};

export default Controls;
