export type CubeState = {
  // simplified representation: array of 6 faces each with 9 stickers (0-5 colors)
  faces: number[][];
  isSolved: boolean;
};

import { useState, useCallback } from 'react';
import { randomizeCube } from '../lib/cubeMath';

export function createSolvedCube(): CubeState {
  return { faces: Array.from({ length: 6 }, (_, i) => Array(9).fill(i)), isSolved: true };
}

export default function useCubeLogic() {
  const [cube, setCube] = useState<CubeState>(() => createSolvedCube());

  const shuffle = useCallback((moves = 20) => {
    setCube(prev => {
      const faces = prev.faces.map(f => f.slice());
      const shuffled = randomizeCube(faces, moves);
      return { faces: shuffled, isSolved: false };
    });
  }, []);

  const applyMove = useCallback((move: string) => {
    // placeholder: should update faces according to move
    setCube(prev => ({ ...prev }));
  }, []);

  const reset = useCallback(() => setCube(createSolvedCube()), []);

  return { cube, shuffle, applyMove, reset };
}
