import { Piece } from "../models/pieces";

export function isTaking(
  destination: number[],
  piece: Piece,
  otherPieces: Piece[]
) {
  return otherPieces.some((otherPiece) => {
    return (
      otherPiece.position[0] === destination[0] &&
      otherPiece.position[1] === destination[1] &&
      !otherPiece.isTaken &&
      piece.isWhite !== otherPiece.isWhite
    );
  });
}
