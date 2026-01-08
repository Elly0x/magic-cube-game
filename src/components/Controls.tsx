import React from 'react';

interface ControlsProps {
  onShuffle: () => void;
  onSolve: () => void;
  onRotate: (move: string) => void;
}

const Controls: React.FC<ControlsProps> = ({ onShuffle, onSolve, onRotate }) => {
  return (
    <div className="controls">
      <button onClick={onShuffle}>Shuffle</button>
      <button onClick={onSolve}>Solve</button>
      <div className="rotate-group">
        <button onClick={() => onRotate('U')}>U</button>
        <button onClick={() => onRotate("U'")}>U'</button>
        <button onClick={() => onRotate('R')}>R</button>
        <button onClick={() => onRotate("R'")}>R'</button>
      </div>
    </div>
  );
};

export default Controls;
