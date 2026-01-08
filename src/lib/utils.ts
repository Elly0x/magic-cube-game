// Funções auxiliares para o cubo

import { Move } from "./cubeMath";

export function generateRandomMoves(count: number = 20): Move[] {
  const moves: Move[] = ["U", "D", "L", "R", "F", "B"];
  const sequence: Move[] = [];

  for (let i = 0; i < count; i++) {
    const randomMove = moves[Math.floor(Math.random() * moves.length)];
    sequence.push(randomMove);
  }

  console.log("Generated shuffle sequence:", sequence);
  return sequence;
}
