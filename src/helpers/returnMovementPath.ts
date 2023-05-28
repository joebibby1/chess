import { Piece } from "../models/pieces";
/**
 *  Doesn't return the starting or ending square
 *
 * @export
 * @param {number[]} from
 * @param {number[]} to
 * @return {number[][]} Array of coordinates of squares passed through
 */
export function returnMovementPath(from: number[], to: number[]): number[][] {
  const movementPath: number[][] = [];
  // along a rank
  if (from[0] === to[0]) {
    // not including the starting or ending square
    for (let i = from[1]; i < to[1]; i++) {
      movementPath.push([from[0], i]);
    }
  }
  // along a file
  if (from[1] === to[1]) {
    for (let i = from[0]; i < to[0]; i++) {
      movementPath.push([i, from[1]]);
    }
  }
  const isDiagonal = Math.abs(from[0] - to[0]) === Math.abs(from[1] - to[1]);
  const movesUpBoard = from[0] < to[0];
  // along a diagonal
  if (isDiagonal && movesUpBoard) {
    let i = [...from];
    while (i[0] < from[0] - 1 && i[1] < from[1] - 1) {
      i[0] += 1;
      i[1] += 1;
      movementPath.push(i);
    }
  }
  if (isDiagonal && !movesUpBoard) {
    let i = [...from];
    while (i[0] > from[0] + 1 && i[1] > from[1] + 1) {
      i[0] -= 1;
      i[1] -= 1;
      movementPath.push(i);
    }
  }

  return movementPath;
}
